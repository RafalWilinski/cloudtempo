import styles from "../styles/Footer.module.css";

const links = [
  {
    title: "Product",
    links: [
      {
        title: "Download",
        href: "/get",
      },
      {
        title: "Roadmap",
        href: "https://github.com/orgs/cloud-tempo/projects/1",
      },
      {
        title: "AWS Gists",
        href: "/gist",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
      {
        title: "Fargate Pricing Calculator",
        href: "/fargate-pricing-calculator",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "Privacy Policy",
        href: "/privacy",
      },

      {
        title: "Dynobase",
        href: "https://dynobase.dev",
      },
      {
        title: "Twitter",
        href: "https://twitter.com/_cloudtempo",
      },
    ],
  },
  {
    title: "Blog",
    links: [
      {
        title: "What is ARN? Complete guide",
        href: "/blog/arn-complete-guide/",
      },
      {
        title: "AWS Amplify: Cannot find file './aws-exports'",
        href: "/blog/amplify-problem-unable-to-resolve-aws-exports/",
      },
      {
        title: "AWS Console Dark Mode",
        href: "/blog/aws-dark-mode/",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <div key={link.title} className={styles.linkGroup}>
              <div className={styles.linkGroupTitle}>{link.title}</div>
              {link.links.map((link) => {
                return (
                  <a key={link.title} className={styles.link} href={link.href}>
                    {link.title}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};
