/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import glob from "glob";
import { Footer } from "../../components/Footer";
import styles from "../../styles/Blogpost.module.css";
import { Nav } from "../../components/Nav";
import { readFileSync } from "fs";
import Link from "next/link";
import { langs } from "../../langs";
import { useState } from "react";

const getFile = (url: string, lang: string) => {
  const metaMarker = langs[lang].metaMarker;
  const snippet = readFileSync(url, "utf8");

  const title = snippet
    .split("\n")
    .filter((line) => line.startsWith(metaMarker))[0]
    .replace(metaMarker, "")
    .trim();

  const code = snippet
    .split("\n")
    .filter((line) => !line.startsWith(metaMarker))
    .join("\n")
    .trim();

  return {
    code,
    title,
  };
};

export async function getStaticProps(context: any) {
  const paths: string[] = glob
    .sync("data/**/*")
    .filter((p) => p.indexOf(".") > 0);

  const gists = paths.map((p) => {
    const [, lang, filename] = p.split("/");
    return {
      ...getFile(p, lang),
      url: p.replace("data/", "").split(".")[0],
      icon: langs[lang].logo,
    };
  });

  return {
    props: {
      gists,
    },
  };
}

const Gist = (props: any) => {
  const { title, language, gists } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Head>
        <title>
          {"AWS Code Snipptets for Python, Bash, JS, Rust, Go and More"}
        </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={"AWS Code Snipptets for Python, Bash, JS, Rust, Go and More"}
        />
      </Head>
      <Nav />
      <main className={styles.content}>
        <h1>
          AWS is hard. We get it. Here are some code snippets to help you out.
        </h1>

        <input
          placeholder="Type what you're looking for... "
          className={styles.search}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {gists
          .filter(
            (g) => g.title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          )
          .map((gist) => (
            <div key={gist.title} className={styles.relatedGist}>
              <Link href={`/gist/${gist.url}`}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={gist.icon}
                    width={24}
                    height={24}
                    alt="Language icon"
                    style={{
                      marginRight: "10px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {gist.title}
                  </p>
                </a>
              </Link>
            </div>
          ))}
      </main>

      <Footer />
    </div>
  );
};

export default Gist;
