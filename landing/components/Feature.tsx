import styles from "../styles/Feature.module.css";

export const Feature = ({
  title,
  description,
  children,
  isChildrenFirst,
}: any) => {
  return (
    <div className={styles.container}>
      {isChildrenFirst && children}
      <div className={styles.textSection}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
      {!isChildrenFirst && children}
    </div>
  );
};
