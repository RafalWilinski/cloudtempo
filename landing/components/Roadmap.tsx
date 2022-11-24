import styles from "../styles/Roadmap.module.css";

const roadmapItems = [
  {
    title: "Favourites (Done ✅)",
    description: "Your favourite resources always at your fingertips.",
  },
  {
    title: "Aliases",
    description: "Refer to resources with a friendly names.",
  },
  {
    title: "Tags & Resource Groups support",
    description: "Probably the best ways to organize resources in the console",
  },
  {
    title: "More supported services",
    description: "In the meantime, majority of AWS services will be supported.",
  },
  {
    title: "Query Language Improvements",
    description:
      "Even more powerful query language. Query by runtime, status, description, etc.",
  },
  {
    title: "Plugins",
    description: "Extends the functionality of the platform.",
  },
  {
    title: "Plugins Directory",
    description: "Discover and install plugins from a central repository.",
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
      <span style={{ fontSize: "12px", color: "#ccc", marginTop: "20px" }}>
        See whole{" "}
        <a href="https://github.com/orgs/cloud-tempo/projects/1/views/1">
          roadmap on Github
        </a>
      </span>
    </div>
  );
};
