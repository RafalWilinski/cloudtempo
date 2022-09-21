import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { getCurrentlySelectedRegions } from "../components/menus/SelectedRegionsMenu";
import { extensionId } from "./extension";
import { getCurrentAccountId } from "./getCurrentAccountId";
import { singletonHook } from "react-singleton-hook";
import { useEffect, useState } from "react";
import { getCurrentlySelectedServices } from "../components/menus/SelectedServicesMenu";

interface ReindexingProgress {
  errors: number;
  errorKeys: string[];
  progress: string;
  totalJobsCount: number;
  resourcesCount: number;
}

interface ReindexingProgressMessage {
  addedCount: number;
  isSuccess: boolean;
  key: string;
  progress: number;
  totalCount: number;
}

const useReindex = (isDemo?: boolean) => {
  const [isReindexing, setIsReindexing] = useState(false);
  const [lastReindexDate, setLastReindexDate] = useState(
    Cookies.get("lastReindexDate")
  );

  const [reindexingProgress, setReindexingProgress] =
    useState<ReindexingProgress>({
      errors: 0,
      errorKeys: [],
      progress: "0",
      totalJobsCount: 0,
      resourcesCount: 0,
    });

  const getLastReindexingDate = () => {
    if (isDemo || location.hostname === "localhost") {
      return;
    }

    chrome.runtime.sendMessage(
      extensionId(),
      {
        type: "getLastReindexDate",
        accountId: getCurrentAccountId(),
      },
      function (response) {
        setLastReindexDate(response);
      }
    );
  };

  // Initial last indexing date ask
  useEffect(() => {
    getLastReindexingDate();

    if (isDemo) {
      return;
    }

    const broadcast = new BroadcastChannel("reindexing-progress-channel");
    console.log("Listening to reindexing progress");

    broadcast.onmessage = (event) => {
      const data = event.data as ReindexingProgressMessage;

      setReindexingProgress((p) => ({
        errorKeys: data.isSuccess ? p.errorKeys : [...p.errorKeys, data.key],
        errors: data.isSuccess ? p.errors : p.errors + 1,
        progress: (data.progress * 100).toFixed(0),
        totalJobsCount: data.totalCount,
        resourcesCount: p.resourcesCount + data.addedCount,
      }));
    };
  }, []);

  const sendReindexRequest = () => {
    if (chrome && chrome.runtime) {
      setIsReindexing(true);
      chrome.runtime.sendMessage(
        extensionId(),
        {
          type: "reindex",
          userInfo: Cookies.get("aws-userInfo"),
          accountId: getCurrentAccountId(),
          selectedRegions: getCurrentlySelectedRegions(),
          selectedServices: getCurrentlySelectedServices(),
        },
        function (response) {
          toast.success(
            `Reindexing done (${response.response.length} resources found)`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
            }
          );
          setIsReindexing(false);
          setLastReindexDate(response.lastReindexDate);
          setReindexingProgress({
            errors: 0,
            errorKeys: [],
            progress: "0",
            totalJobsCount: 0,
            resourcesCount: 0,
          });
        }
      );
    }
  };

  const timeSinceLastReindex = () => {
    if (!lastReindexDate) {
      return undefined;
    }
    const date = new Date(lastReindexDate);
    const diff = new Date().getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const timeSinceLastReindexString = (): string | undefined => {
    const time = timeSinceLastReindex();
    if (!time) {
      return "account not indexed yet";
    }

    if (time.days > 0) {
      return `${time.days} days ago`;
    }

    if (time.hours > 0) {
      return `${time.hours} hours ago`;
    }

    if (time.minutes > 0) {
      return `${time.minutes} minutes ago`;
    }

    if (time.seconds > 0) {
      return "couple seconds ago";
    }

    return "couple seconds ago";
  };

  const reindexItemLabel = () => {
    if (isReindexing && reindexingProgress.progress === "100") {
      return "Reindexing... (Almost done!)";
    }

    if (isReindexing && reindexingProgress.progress === "0") {
      return "Reindexing... (Initializing)";
    }

    if (isReindexing && reindexingProgress.progress !== "0") {
      return `Reindexing... (${reindexingProgress.progress}%, ${reindexingProgress.resourcesCount} resources indexed)`;
    }

    const lastReindexDate = timeSinceLastReindexString();

    if (lastReindexDate === "account not indexed yet") {
      return "Create search index (needed to make search work)";
    }

    return `Reindex search (last ran: ${lastReindexDate})`;
  };

  return {
    sendReindexRequest,
    timeSinceLastReindex,
    timeSinceLastReindexString,
    isReindexing,
    lastReindexDate,
    reindexItemLabel,
    progress: reindexingProgress.progress,
  };
};

export const useReindexing = singletonHook(
  {
    isReindexing: false,
    timeSinceLastReindex: () => undefined,
    timeSinceLastReindexString: () => undefined,
    sendReindexRequest: () => undefined,
    lastReindexDate: "never",
    progress: "0",
    reindexItemLabel: () => "Create search index (needed to make search work)",
  },
  useReindex
);
