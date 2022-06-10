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
};

export const posts = Object.values(import.meta.globEager(`$posts/**/*.md`))
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  .filter((post) => Boolean(post.metadata?.title))
  .map((post) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const title = post.metadata.title as string;
    const slug = slugFromName(title);
    return { post, slug } as Post;
  });
