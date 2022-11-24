/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import glob from "glob";
import Highlight from "react-highlight";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { Footer } from "../../../components/Footer";
import styles from "../../../styles/Blogpost.module.css";
import { Feature } from "../../../components/Feature";
import { Nav } from "../../../components/Nav";
import { readFileSync } from "fs";
import Link from "next/link";
import { langs } from "../../../langs";
import { getRandomTitle, titles } from "../../../components/titles";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  const paths: string[] = glob.sync("data/**/*");
  const slugs = paths.filter((p) => p.indexOf(".") > 0);
  const params = slugs.map((s) => {
    const [, language, slug] = s.split("/");
    return {
      params: {
        language,
        slug: slug.split(".")[0],
        url: s,
      },
    };
  });

  return {
    paths: params,
    fallback: false, // can also be true or 'blocking'
  };
}

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
  const extension = langs[context.params.language].extension;
  const { code, title } = getFile(
    `data/${context.params.language}/${context.params.slug}.${extension}`,
    context.params.language
  );

  const relatedPaths: string[] = glob
    .sync(`data/${context.params.language}/*`)
    .slice(0, 10);

  const relatedGists = relatedPaths.map((p) => ({
    ...getFile(p, context.params.language),
    url: p.replace("data/", "").split(".")[0],
    icon: langs[context.params.language].logo,
  }));

  const linesOfCode = code.split("\n").length;
  const charactersCount = code.length;

  return {
    props: {
      code,
      title,
      linesOfCode,
      charactersCount,
      language: context.params.language,
      relatedGists,
    },
  };
}

const Gist = (props: any) => {
  const {
    children,
    code,
    title,
    linesOfCode,
    charactersCount,
    language,
    relatedGists,
  } = props;

  const meta = {
    title,
  };

  const [adTitle, setTitle] = useState(titles[0]);
  useEffect(() => {
    setTitle(getRandomTitle());
  }, []);

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
          content={`Code snippet and examples for ${meta.title}`}
        />
      </Head>
      <Nav />
      <main className={styles.content}>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          {meta.title}
        </h1>
        {children}

        <div style={{ position: "relative" }}>
          <Highlight language={language}>{code}</Highlight>
          <div
            style={{
              marginTop: "-30px",
              padding: "10px",
              background: "#0d1117",
              color: "#ccc",
              float: "right",
            }}
          >
            {linesOfCode} lines of code, {charactersCount} characters
          </div>
          <ClipboardDocumentIcon
            onClick={() => {
              copyToClipboard(code);
            }}
            width={30}
            height={30}
            className={styles.copyButton}
          />
        </div>
        <p
          style={{
            fontSize: "1rem",
            color: "#aaa",
            marginTop: "50px",
          }}
        >
          Similar AWS code snippets using {language}
        </p>
        {relatedGists.map((gist) => (
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
        <Feature
          withDownload={true}
          style={{ margin: "80px -60px 40px" }}
          descriptionStyle={{ fontSize: "0.88rem", marginTop: "-34px" }}
          title={adTitle}
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

function copyToClipboard(textToCopy: string) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy);
  } else {
    // text area method
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    // make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
}

export default Gist;
