import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Pricing } from "../components/Pricing";
import { SupportedServicesSection } from "../components/SupportedServices";
import { FAQ } from "../components/FAQ";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Roadmap } from "../components/Roadmap";
import { Nav } from "../components/Nav";
import { Testimonial } from "../components/Testimonial";
import { InstallButton } from "../components/InstallButton";
import { EmailMeDownloadLink } from "../components/EmailMeTheDownloadLink";

const browserIconSize = 28;

const Home: NextPage = () => {
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    setIsOnMobile(window.innerWidth < 600);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CloudTempo - Fast & Smart CMD + K for AWS Console</title>
        <meta
          name="description"
          content="CloudTempo - Fast & Smart Command Bar for AWS Console"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          property="og:title"
          content="CloudTempo - Fast & Smart Command Bar for AWS Console"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="CloudTempo - Fast & Smart Command Bar for AWS Console"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudtempo.dev" />
        <meta
          property="og:image"
          content="https://cloudtempo.dev/og-image.png"
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
            {isOnMobile ? (
              <EmailMeDownloadLink />
            ) : (
              <div style={{ display: "flex" }}>
                <InstallButton withSubtext={false} />
                <div
                  style={{
                    paddingLeft: 10,
                    marginLeft: 15,
                    borderLeft: "1px solid #333",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span className={styles.availableFor}>Available for</span>
                  <div style={{ display: "flex" }}>
                    <a
                      className={styles.chromeIcon}
                      href="https://chrome.google.com/webstore/detail/cloudtempo/hnjemcffliolmflachhfoeaojlomanph"
                      target="_blank"
                      onClick={() => window.fathom?.trackGoal("LQRP31GN", 0)}
                      rel="noreferrer"
                    >
                      <Image
                        height={browserIconSize}
                        width={browserIconSize}
                        src="/chrome.svg"
                        alt="Download from Chrome Web Store"
                      />
                    </a>
                    <a
                      className={styles.chromeIcon}
                      onClick={() => window.fathom?.trackGoal("BAR3DQF9", 0)}
                      href="https://microsoftedge.microsoft.com/addons/detail/cloudtempo/blflgmdpajfmmcgbbekldlldolbpmdhb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        height={browserIconSize}
                        width={browserIconSize}
                        src="/edge.svg"
                        alt="Download from Edge Addons"
                      />
                    </a>
                    <a className={styles.safariIcon}>
                      <Image
                        height={browserIconSize}
                        width={browserIconSize}
                        src="/safari.svg"
                        alt="Download from Apple App Store (soon)"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {!isOnMobile && (
              <span
                style={{
                  marginTop: "10px",
                  display: "block",
                  color: "#aaa",
                  fontSize: "12px",
                }}
              >
                Free 7-days trial • No email or credit card required
              </span>
            )}
          </div>
          <div style={{ width: "60%" }}>
            <video
              id="demo-video"
              src="/demo2.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={true}
              style={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: "4px",
              }}
            />
          </div>
          {/* <Demo isDemo={true} demoText={demoText} /> */}
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
          <InstallButton style={{ margin: "auto" }} />
          <span
            style={{
              marginTop: "10px",
              display: "block",
              textAlign: "center",
              color: "#aaa",
              fontSize: "12px",
            }}
          >
            Free 7-days trial • No email or credit card required
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
