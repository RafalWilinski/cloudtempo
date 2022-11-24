import Head from "next/head";
import Image from "next/image";
import { renderToString } from "react-dom/server";
import { Footer } from "../components/Footer";
import styles from "../styles/Blogpost.module.css";
import { Feature } from "./Feature";
import { Nav } from "./Nav";
import { getRandomTitle } from "./titles";

const Blogpost = (props: any) => {
  const { children, meta } = props;

  const contentString = renderToString(children);

  const getHeadings = (source: string) => {
    const regex = /<h2(.*?)<\/h2>/g;

    if (source.match(regex)) {
      return (source.match(regex) ?? []).map((heading) => {
        console.log(heading);
        const headingText = heading
          .split("</span></a>")[1]
          .replace("</h2>", "");

        const link = `#${headingText
          .replace(/ /g, "-")
          .replace("?", "")
          .toLowerCase()}`;

        return {
          text: headingText,
          link,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);
  const readingTime = Math.ceil(contentString.split(" ").length / 200);

  return (
    <div>
      <Head>
        <title>{meta.title ?? "CloudTempo"}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
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
        <p className={styles.date}>
          {meta.date} / Reading time: {readingTime} minutes
        </p>
        <h1>{meta.title}</h1>

        {headings.length > 0 ? (
          <ul className={styles.tocTable}>
            {headings.map((heading) => (
              <li key={heading.text} className={styles.tocLink}>
                <a href={heading.link}>{heading.text}</a>
              </li>
            ))}
          </ul>
        ) : null}

        {children}

        <Feature
          withDownload={true}
          style={{ margin: "80px -60px 40px" }}
          descriptionStyle={{ fontSize: "0.88rem", marginTop: "-34px" }}
          title={getRandomTitle()}
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
    </div>
  );
};

export default Blogpost;
