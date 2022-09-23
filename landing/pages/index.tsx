import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Demo from "../../front/my-app/src/Demo";
import { useEffect, useState } from "react";
import { Pricing } from "../components/Pricing";
import { SupportedServicesSection } from "../components/SupportedServices";
import { FAQ } from "../components/FAQ";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { NewsletterForm } from "../components/NewsletterForm";
import { Roadmap } from "../components/Roadmap";
import { Nav } from "../components/Nav";
import { Testimonial } from "../components/Testimonial";

const Home: NextPage = () => {
  const [demoText, setDemoText] = useState("");

  useEffect(() => {
    const firstTextToSet = "lambda";

    for (let i = 0; i < firstTextToSet.length; i++) {
      setTimeout(() => {
        setDemoText(firstTextToSet.substring(0, i + 1));
      }, 1000 + i * 100);
    }

    setTimeout(() => {
      setDemoText("");
    }, 3000);

    const secondTextToSet = "dynamo";

    for (let i = 0; i < secondTextToSet.length; i++) {
      setTimeout(() => {
        setDemoText(secondTextToSet.substring(0, i + 1));
      }, 5500 + i * 100);
    }

    setTimeout(() => {
      setDemoText("");
    }, 9000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CloudTempo - Fast & Smart CMD + K for AWS Console</title>
        <meta
          name="description"
          content="CloudTempo - Fast & Smart Command Bar for AWS Console"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div
            style={{ textAlign: "left" }}
            className={styles.headingLeftColumn}
          >
            <h1 className={styles.title} style={{ textAlign: "left" }}>
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
            <h3>
              Navigate through AWS Console with speed. Easily find resources,
              perform actions with single keystrokes. Designed for power users.
            </h3>
            <NewsletterForm />
          </div>
          <Demo isDemo={true} demoText={demoText} />
        </div>
        <h2 style={{ fontSize: "3em", textAlign: "center", margin: "auto" }}>
          Speed up your AWS workflow
        </h2>
        <Feature
          title="Find resources cross regions. Fast."
          description="Was that in us-east-1? Or us-west-2? No need to remember. Just type the name of the resource and CloudTempo will find it for you."
        >
          <Image
            src="/resources.png"
            alt="Feature"
            width={545}
            height={280}
            layout="fixed"
            quality={100}
          />
        </Feature>
        <Feature
          title="Pure action"
          description="Save your time navigating through the console. Jump into desired part of the console straight from the command bar. Just type it."
          isChildrenFirst={true}
        >
          <Image
            src="/shortcuts.png"
            alt="Feature"
            layout="fixed"
            width={545}
            height={280}
            quality={100}
          />
        </Feature>
        <Feature
          title="Query Language"
          description="Find precisely what you're looking for with our query language. Filter by name, service type, region and more."
        >
          <div
            style={{
              marginBottom: "-20px",
              marginTop: "12px",
              marginLeft: "12px",
            }}
          >
            <Image
              src="/query-lang.png"
              alt="Feature"
              width={545}
              height={280}
              quality={100}
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
        </Feature>

        <Feature
          isChildrenFirst={true}
          title="Misstakesss happen"
          description="Even to me. I know, typing is hard. CloudTempo got you covered. Thanks to fuzzy matching, we'll find that pesky resource hiding in the console."
        >
          <Image
            src="/mistakes.png"
            alt="Feature"
            layout="fixed"
            width={545}
            height={280}
            quality={100}
          />
        </Feature>

        <h2
          style={{ fontSize: "3em", textAlign: "center", margin: "4rem auto" }}
        >
          Trusted by AWS experts
        </h2>

        <Testimonial
          authorName="Marek Kuczyński"
          authorHref="https://twitter.com/marekq"
          authorTitle="ex-AWS Strategic Accounts Solutions Architect"
          description={() => (
            <p>
              CloudTempo gives me a <strong>massive advantage</strong> with
              debugging serverless architectures. I used to click around in the
              console to find buckets, functions and tables, but now just jump
              straight to the resource I need. 10/10, would recommend!
            </p>
          )}
        >
          <Image
            style={{ borderRadius: "50%" }}
            src="/testimonials/marekk.jpeg"
            alt="Marek Kuczynski"
            layout="fixed"
            width={64}
            height={64}
            quality={100}
          />
        </Testimonial>
        <Roadmap />
        <SupportedServicesSection />
        <Pricing />
        <FAQ />
        <div style={{ textAlign: "left", marginLeft: 0 }}>
          <NewsletterForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
