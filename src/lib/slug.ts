import type { SvelteComponent } from "svelte/internal";

export function slugFromName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .join("_");
}

export type Post = {
  post: {
    default: SvelteComponent;
    metadata: { title?: string; subtitle?: string; date?: string; citekey?: string; tags?: string[] };
  };
  slug: string;
  raw: string;
};

const raw = import.meta.globEager(`$posts/**/*.md`, { as: "raw" });
const processed = import.meta.globEager(`$posts/**/*.md`);

export const posts = Object.keys(processed)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  .filter((path) => Boolean(processed[path].metadata?.title))
  .map((path) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const title = processed[path].metadata.title as string;
    const slug = slugFromName(title);
    return { post: processed[path], raw: raw[path], slug } as Post;
  });
