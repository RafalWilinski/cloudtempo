import toc from "remark-toc";
import nextMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [toc],
    rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeAutolinkHeadings],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
