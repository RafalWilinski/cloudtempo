import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children, meta }: any) => {
  return (
    <>
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
    </>
  );
};

export default Layout;
