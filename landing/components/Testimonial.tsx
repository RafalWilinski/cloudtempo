import styles from "../styles/Testimonial.module.css";

export const Testimonial = ({
  authorName,
  authorTitle,
  authorHref,
  description,
  children,
}: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{description()}</div>
      {children}
      <a
        href={authorHref}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.authorName}
      >
        {authorName}
      </a>
      <h5 className={styles.authorTitle}>{authorTitle}</h5>
    </div>
  );
};
