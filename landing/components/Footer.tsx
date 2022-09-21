import Image from "next/image";
import styles from "../styles/Footer.module.css";

const links = [
  {
    title: "Product",
    links: [
      {
        title: "Download",
        href: "/alpha",
      },
      {
        title: "Roadmap",
        href: "https://github.com/orgs/cloud-tempo/projects/1",
      },
      {
        title: "Issues",
        href: "https://github.com/cloud-tempo/cloudtempo/issues",
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
        title: "Terms of Service",
        href: "/tos",
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
