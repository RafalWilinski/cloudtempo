import { extensionId } from "../lib/extension";
import { useCheckVersion } from "../lib/useCheckVersion";

export const NewVersionBanner = () => {
  const { getNewAvailableVersionInfo } = useCheckVersion();

  const versionInfo = getNewAvailableVersionInfo();

  if (!versionInfo) {
    return <div />;
  }

  return (
    <div
      className="new-version-banner"
      style={{ cursor: "pointer" }}
      onClick={() => {
        chrome.runtime.sendMessage(extensionId(), {
          type: "openInNewTab",
          url: "https://cloudtempo.dev/get",
        });
      }}
    >
      <span>New version ({versionInfo.latest}) available</span>
      <span> - {versionInfo.changes}</span>
    </div>
  );
};
