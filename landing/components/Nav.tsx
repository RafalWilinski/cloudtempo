import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { InstallButton } from "./InstallButton";

const links = [
  {
    title: "Download",
    href: "/alpha",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "Roadmap",
    href: "https://github.com/orgs/cloud-tempo/projects/1/views/1",
  },
];

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.home} href="/">
        <a
          style={{ display: "flex", textDecoration: "none", marginTop: "3px" }}
        >
          <span className={styles.logo} style={{ marginRight: "10px" }}>
            <Image
              src="/logo.svg"
              alt="CloudTempo Logo"
              width={20}
              height={20}
            />
          </span>
          <div
            style={{ marginTop: "1px", textDecoration: "none" }}
            className={styles.productName}
          >
            CloudTempo
          </div>
        </a>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.title} href={link.href} className={styles.link}>
            {link.title}
          </a>
        ))}
        <InstallButton style={{ marginLeft: "20px" }} />
      </div>
    </nav>
  );
};
