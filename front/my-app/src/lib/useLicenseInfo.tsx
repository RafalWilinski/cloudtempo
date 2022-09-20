import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { LicenseInfo } from "../../background/lib/checkUser";
import { extensionId } from "./extension";

export function useLicenseInfo(isDemo?: boolean) {
  const REFRESH_INTERVAL_SECONDS = 30;
  const [userInfo, setUserInfo] = useState<LicenseInfo | undefined>(undefined);

  // Initial license ask
  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const periodicalCheck = setInterval(() => {
      refresh();
    }, 1000 * REFRESH_INTERVAL_SECONDS);

    return () => {
      clearInterval(periodicalCheck);
    };
  });

  function refresh() {
    console.log("Refresh");
    chrome.runtime.sendMessage(
      extensionId(),
      {
        userInfo: Cookies.get("aws-userInfo"),
        type: "getLicenseInfo",
      },
      function (response) {
        setUserInfo(response);
      }
    );
  }

  function canUseSoftware(): boolean {
    if (isDemo) {
      return true;
    }

    return !userInfo || userInfo.isValid;
  }

  function getTimeRemainingSeconds(): number {
    if (isDemo) {
      return 99999999999;
    }

    const secondsStr = userInfo?.timeRemaining ?? "0";
    return parseInt(secondsStr, 10);
  }

  function isActivated(): boolean {
    if (isDemo) {
      return true;
    }

    return !!(userInfo && userInfo.licenseKey);
  }

  function getTimeRemainingFormatted() {
    if (isActivated()) {
      return "Infinity";
    }

    const seconds = getTimeRemainingSeconds() / 1000;

    if (!seconds) {
      return "whoops";
    }

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return `${days} days`;
    }

    if (hours > 1) {
      return `${hours} hours`;
    }

    return `${days}d ${hours % 24}h ${minutes % 60}m`;
  }

  return {
    userInfo,
    setUserInfo,
    canUseSoftware,
    isActivated,
    refresh,
    getTimeRemainingSeconds,
    getTimeRemainingFormatted,
  };
}
