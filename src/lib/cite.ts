import references from "$src/posts/references.bib?raw";

import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-csl";

const parsed = Cite(references);

// https://github.com/citation-js/citation-js/tree/main/packages/plugin-csl
export function getCitation(key: string) {
  return {
    ...parsed.data.find((item) => item["citation-key"] === key),
    html: parsed.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "en-US",
      entry: [key],
    }),
  };
}
