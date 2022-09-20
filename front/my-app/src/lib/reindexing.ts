import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { getCurrentlySelectedRegions } from "../components/menus/SelectedRegionsMenu";
import { extensionId } from "./extension";
import { getCurrentAccountId } from "./getCurrentAccountId";
import { singletonHook } from "react-singleton-hook";
import { useEffect, useState } from "react";
import { getCurrentlySelectedServices } from "../components/menus/SelectedServicesMenu";

const useReindex = () => {
  const [isReindexing, setIsReindexing] = useState(false);
  const [lastReindexDate, setLastReindexDate] = useState(
    Cookies.get("lastReindexDate")
  );

  const getLastReindexingDate = () => {
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
    if (isReindexing) {
      return "Reindexing...";
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
  };
};

export const useReindexing = singletonHook(
  {
    isReindexing: false,
    timeSinceLastReindex: () => undefined,
    timeSinceLastReindexString: () => undefined,
    sendReindexRequest: () => undefined,
    lastReindexDate: "never",
    reindexItemLabel: () => "Create search index (needed to make search work)",
  },
  useReindex
);
