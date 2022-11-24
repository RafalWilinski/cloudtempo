import Head from "next/head";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Nav } from "./Nav";

const Layout = ({ children, meta }: any) => {
  return (
    <div>
      <Head>
        <title>{meta.title ?? "CloudTempo"}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            meta.description ??
            "CloudTempo - Fast & Smart CMD + K for AWS Console"
          }
        />
      </Head>
      <Nav />
      <main
        className={styles.content}
        style={{
          textAlign: "left",
          display: "block",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
