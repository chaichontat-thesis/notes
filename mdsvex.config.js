import { defineMDSveXConfig as defineConfig } from "mdsvex";

import remarkGithub from "remark-github";
import remarkAbbr from "remark-abbr";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex-svelte";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/_post.svelte",
  smartypants: { dashes: "oldschool" },

  remarkPlugins: [remarkAbbr, remarkMath],
  rehypePlugins: [rehypeSlug, rehypeKatex],
});

export default config;
