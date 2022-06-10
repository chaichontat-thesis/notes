import { slugFromName } from "$src/lib/slug";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ url }) => {
  const modules = import.meta.glob("$posts/*.{md,svx,svelte.md}");
  const limit = Number(url.searchParams.get("limit") ?? Infinity);
  if (Number.isNaN(limit)) return { status: 400 };

  const tag = url.searchParams.get("tag");

  const postPromises = [];
  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromName(path);
    const promise = resolver().then((post) => ({
      slug,
      ...post,
    }));

    postPromises.push(promise);
  }

  let posts = (await Promise.all(postPromises)).map((post) => ({ ...post, ...post.default.render() }));

  if (tag) {
    posts = posts.filter((post) => post.metadata?.tags?.includes(tag));
  }

  // posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return {
    body: posts.slice(0, limit),
  };
};
