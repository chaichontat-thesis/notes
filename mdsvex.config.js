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
    [rehypeCitation, { bibliography: path.join(root, "references.bib"), inlineClass: ["citation"] }],
    rehypeSlug,
    rehypeKatex,
    // rehypeToc,
    rehypeFigure, // Add figcaption from alt text.
    // [rehypeAutolinkHeadings, { behavior: "wrap", test: ["h1", "h2", "h3"] }],
  ],
});

export default config;
