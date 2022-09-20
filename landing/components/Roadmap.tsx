import styles from "../styles/Roadmap.module.css";

const roadmapItems = [
  {
    title: "Aliases",
    description: "Refer to resources with a friendly names.",
  },
  {
    title: "Favourites",
    description: "Your favourite resources always at your fingertips.",
  },
  {
    title: "Query Language",
    description: "Find resources using a powerful query language.",
  },
  {
    title: "Plugins",
    description: "Extends the functionality of the platform.",
  },
];

export const Roadmap = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Roadmap</h2>
      <div className={styles.items}>
        {roadmapItems.map((item, index) => (
          <div
            className={index % 2 === 0 ? styles.itemEven : styles.itemOdd}
            key={index}
          >
            <div
              className={index % 2 === 0 ? styles.lineEven : styles.lineOdd}
            ></div>
            <div style={{ width: "50%", padding: "5px 20px" }}>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
