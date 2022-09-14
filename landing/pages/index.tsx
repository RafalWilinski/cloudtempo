import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Demo from "../../front/my-app/src/App";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CloudTempo - Fast & Smart CMD + K for AWS Console</title>
        <meta
          name="description"
          content="Fast & Smart Command Bar for AWS Console"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav
        style={{
          padding: "20px",
          display: "flex",
        }}
      >
        <span className={styles.logo} style={{ marginRight: "10px" }}>
          <Image src="/logo.svg" alt="CloudTempo Logo" width={20} height={20} />
        </span>
        <strong style={{ marginTop: "1px" }}>CloudTempo</strong>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fast &{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitBoxDecorationBreak: "clone",
            }}
          >
            <span>Smart</span>
          </span>{" "}
          Command Bar for AWS Console
        </h1>
        <h3
          style={{
            color: "#eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Press
          <div
            style={{
              fontSize: "1rem",
              backgroundColor: "#333",
              padding: "10px",
              margin: "0 10px",
              borderRadius: "10px",
              color: "#ccc",
            }}
          >
            ⌘ + K
          </div>
          and see for yourself.
        </h3>
        <Demo isDemo={true} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/_cloudtempo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    </div>
  );
};

export default Home;
