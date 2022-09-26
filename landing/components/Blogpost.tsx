import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import styles from "../styles/Blogpost.module.css";
import { Feature } from "./Feature";
import { Nav } from "./Nav";

const Blogpost = ({ children, meta }: any) => {
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
      <main className={styles.content}>
        <p className={styles.date}>{meta.date}</p>
        <h1>{meta.title}</h1>
        {children}

        <Feature
          withDownload={true}
          style={{ margin: "80px -60px 40px" }}
          descriptionStyle={{ fontSize: "0.88rem", marginTop: "-34px" }}
          title="Find resources cross regions. Fast."
          description="Was that in us-east-1? Or us-west-2? No need to remember. Just type the name of the resource and CloudTempo will find it."
        >
          <Image
            src="/resources.png"
            alt="Feature"
            width={590}
            height={284}
            layout="fixed"
            quality={100}
            style={{
              marginTop: "20px",
            }}
          />
        </Feature>
      </main>

      <Footer />
    </div>
  );
};

export default Blogpost;
