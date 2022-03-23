import { defineMDSveXConfig as defineConfig } from "mdsvex";

import remarkAbbr from "remark-abbr";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeCitation from "rehype-citation";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex-svelte";
import path from "path";

const root = process.cwd();
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/_post.svelte",

  remarkPlugins: [remarkAbbr, remarkMath],
  rehypePlugins: [
    [rehypeCitation, { bibliography: path.join(root, "test.bib") }],
    rehypeSlug,
    rehypeKatex,
    // rehypeToc,
    [rehypeAutolinkHeadings, { behavior: "wrap", test: ["h1", "h2", "h3"] }],
  ],
});

export default config;
