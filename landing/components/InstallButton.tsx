import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/InstallButton.module.css";

export const InstallButton = ({ style, href, text }: any) => {
  const [installLink, setInstallLink] = useState("/get");

  useEffect(() => {
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    const isEdge = window.navigator.userAgent.indexOf("Edge") > -1;

    if (isChrome) {
      setInstallLink(
        "https://chrome.google.com/webstore/detail/cloudtempo/hnjemcffliolmflachhfoeaojlomanph"
      );
    }

    if (isEdge) {
      setInstallLink(
        "https://microsoftedge.microsoft.com/addons/detail/cloudtempo/blflgmdpajfmmcgbbekldlldolbpmdhb"
      );
    }
  }, []);

  return (
    <Link href={href || installLink} target="_blank">
      <button
        className={styles.installBtn}
        style={style ?? {}}
        onClick={() => {
          window.fathom?.trackGoal("JMLUGQGR", 0);
        }}
      >
        <ArrowDownCircleIcon
          width={24}
          height={24}
          style={{ marginRight: "4px" }}
        />
        {text ?? "Download Now"}
      </button>
    </Link>
  );
};
