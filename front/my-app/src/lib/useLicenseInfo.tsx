import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { LicenseInfo } from "../../background/lib/checkUser";
import { extensionId } from "./extension";

export function useLicenseInfo() {
  const [userInfo, setUserInfo] = useState<LicenseInfo | undefined>(undefined);

  // Initial license ask
  useEffect(() => {
    console.log("Initial ask.");
    chrome.runtime.sendMessage(
      extensionId,
      {
        userInfo: Cookies.get("aws-userInfo"),
        type: "getLicenseInfo",
      },
      function (response) {
        setUserInfo(response);
      }
    );
  }, []);

  function canUseSoftware(): boolean {
    return !userInfo || userInfo.isValid;
  }

  function getTimeRemainingSeconds(): number {
    return parseInt(userInfo?.timeRemaining ?? "0", 2);
  }

  function isActivated(): boolean {
    return !!(userInfo && userInfo.licenseKey);
  }

  function getTimeRemainingFormatted() {
    if (isActivated()) {
      return "Infinity";
    }

    const seconds = getTimeRemainingSeconds();

    if (!seconds) {
      return "whoops";
    }

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return `${days}d ${hours % 24}h ${minutes % 60}m`;
  }

  return {
    userInfo,
    setUserInfo,
    canUseSoftware,
    isActivated,
    getTimeRemainingSeconds,
    getTimeRemainingFormatted,
  };
}
