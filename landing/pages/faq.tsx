import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

const PrivacyPolicyPage = () => {
  return (
    <>
      <main
        className={styles.content}
        style={{
          textAlign: "left",
          display: "block",
        }}
      >
        <FAQ />

        <p>
          Any other questions? Email me:{" "}
          <a href="mailto:rafal@cloudtempo.dev">rafal@cloudtempo.dev</a>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
