import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "../styles/InstallButton.module.css";

export const InstallButton = ({ withSubtext, style, href, text }: any) => {
  return (
    <>
      <Link
        href={href || "/beta"}
        onClick={() => {
          if (href.includes("download")) {
            window.fathom?.trackGoal("JMLUGQGR", 0);
          }
        }}
      >
        <button className={styles.installBtn} style={style ?? {}}>
          <ArrowDownCircleIcon
            width={24}
            height={24}
            style={{ marginRight: "4px" }}
          />
          {text ?? "Beta Access"}
        </button>
      </Link>
      {withSubtext && (
        <span
          style={{
            marginTop: "10px",
            display: "block",
            color: "#aaa",
            fontSize: "12px",
          }}
        >
          Free 7-days trial • Available for Chrome, Edge & Firefox • No email or
          credit card required
        </span>
      )}
    </>
  );
};
