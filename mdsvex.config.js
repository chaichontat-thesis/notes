import { defineMDSveXConfig as defineConfig } from "mdsvex";

import remarkAbbr from "remark-abbr";
import remarkMath from "remark-math";
import remarkCaptions from "remark-captions";
import rehypeSlug from "rehype-slug";
import rehypeCitation from "rehype-citation";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFigure from "rehype-figure";
import rehypeKatex from "rehype-katex-svelte";
import path from "path";
import remarkGfm from "remark-gfm";
import rehypeLazyLoad from "rehype-plugin-image-native-lazy-loading";

const katexMacros = {};
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  katexMacros["\\b" + String.fromCharCode(i)] = "\\mathbf{" + String.fromCharCode(i) + "}";
}

const root = process.cwd();
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/_post.svelte",

  remarkPlugins: [
    remarkGfm,
    remarkAbbr,
    remarkMath,
    remarkCaptions, // Add figcaptions from explicit mark.
  ],
  rehypePlugins: [
    [
      rehypeCitation,
      {
        bibliography: "src/posts/references.bib",
        inlineClass: ["citation"],
      },
    ],
    rehypeSlug,
    [rehypeKatex, { macros: katexMacros }],
    [rehypeToc, { headings: ["h1", "h2", "h3"], cssClasses: { toc: "toc not-prose", link: "toc-link" } }],
    rehypeFigure, // Add figcaption from alt text.
    rehypeLazyLoad,
    // [rehypeAutolinkHeadings, { behavior: "wrap", test: ["h1", "h2", "h3"] }],
  ],
});

export default config;
