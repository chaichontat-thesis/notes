import { defineMDSveXConfig as defineConfig } from "mdsvex";

import remarkGithub from "remark-github";
import remarkAbbr from "remark-abbr";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "src/routes/_post.svelte",
  smartypants: { dashes: "oldschool" },

  remarkPlugins: [remarkAbbr],
  rehypePlugins: [rehypeSlug],
});

export default config;
