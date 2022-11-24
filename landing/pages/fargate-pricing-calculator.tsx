import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FAQ } from "../components/FAQ";
import Calculator from "../components/FargatePricingCalculator";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { getRandomTitle, titles } from "../components/titles";
import styles from "../styles/Home.module.css";

const FargatePricingCalculatorPage = () => {
  const [title, setTitle] = useState(titles[0]);
  useEffect(() => {
    setTitle(getRandomTitle());
  }, []);

  return (
    <>
      <Head>
        <title>{"AWS Fargate Pricing Calculator - CloudTempo"}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            "AWS Fargate Pricing Calculator by CloudTempo. Calculate your Fargate costs."
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
        <h1>AWS Fargate Pricing Calculator</h1>
        <p>
          Calculate your AWS Fargate costs based on region, CPU, memory,
          architecture, and storage options.
        </p>

        <Calculator />

        <Feature
          withDownload={true}
          style={{ margin: "80px -60px 40px" }}
          descriptionStyle={{ fontSize: "0.88rem", marginTop: "-34px" }}
          title={title}
          description="Was that in us-east-1? Or us-west-2? No need to remember. Just type the name of the resource and CloudTempo will find it."
        >
          <Image
            src="/in-console.png"
            alt="Feature"
            width={500}
            height={300}
            layout="fixed"
            quality={100}
            style={{
              marginTop: "24px",
            }}
          />
        </Feature>
      </main>
      <Footer />
    </>
  );
};

export default FargatePricingCalculatorPage;
