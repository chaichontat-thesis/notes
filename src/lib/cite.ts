/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import references from "$src/posts/references.bib?raw";

import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-csl";
import "@citation-js/plugin-doi";

const parsed = Cite(references);

export interface Citation {
  html: string;
}

// https://github.com/citation-js/citation-js/tree/main/packages/plugin-csl
export function getCitation(key: string): Citation {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...parsed.get().find((item: Record<string, string>) => item["citation-key"] === key),
    html: parsed.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "en-US",
      entry: [key],
    }),
  };
}
