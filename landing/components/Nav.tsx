import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { InstallButton } from "./InstallButton";

const links = [
  {
    title: "Download",
    href: "/get",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "Gists",
    href: "/gist",
  },
];

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.home} href="/">
        <a
          className={styles.homeA}
          style={{ display: "flex", textDecoration: "none" }}
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
          <Link key={link.title} href={link.href}>
            <a className={styles.link}>{link.title}</a>
          </Link>
        ))}
        <InstallButton style={{ marginLeft: "20px" }} />
      </div>
    </nav>
  );
};
