import styles from "../styles/Feature.module.css";
import { InstallButton } from "./InstallButton";

export const Feature = ({
  title,
  description,
  children,
  isChildrenFirst,
  withDownload = false,
  descriptionStyle = {},
  style = {},
}: any) => {
  return (
    <div className={styles.container} style={style}>
      {isChildrenFirst && children}
      <div className={styles.textSection}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description} style={descriptionStyle}>
          {description}
        </p>
        {withDownload && <InstallButton text="Download Now" />}
      </div>
      {!isChildrenFirst && children}
    </div>
  );
};
