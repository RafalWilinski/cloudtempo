import { useEffect, useState } from "react";
import { extensionId } from "./extension";

interface VersionInfo {
  currentVersion: string;
  latest: string;
  changes: string;
  moreUrl: string;
  createdAt: Date;
}

export function useCheckVersion() {
  const [version, setVersionInfo] = useState<VersionInfo | undefined>(
    undefined
  );

  useEffect(() => {
    if (
      location.hostname === "localhost" ||
      location.hostname === "cloudtempo.dev"
    ) {
      return undefined;
    }

    chrome.runtime.sendMessage(
      extensionId(),
      {
        type: "checkVersion",
      },
      function (response) {
        console.log(response);
        setVersionInfo(response);
      }
    );
  }, []);

  const getNewAvailableVersionInfo = () => {
    if (!version) {
      return undefined;
    }

    if (version.currentVersion !== version.latest) {
      return version;
    }
  };

  return {
    getNewAvailableVersionInfo,
  };
}
