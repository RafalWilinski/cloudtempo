import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Nav } from "./Nav";

const Layout = ({ children, meta }: any) => {
  return (
    <div>
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
