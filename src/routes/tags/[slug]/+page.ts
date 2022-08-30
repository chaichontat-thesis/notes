import { posts } from "$lib/slug";
import { error, type Load } from "@sveltejs/kit";

export const load: Load = ({ params }) => {
  const filteredPost = posts.filter((post) => post.post.metadata.tags?.includes(params.slug));
  // const header = url.searchParams.get("header") === "false" ? false : true;
  if (filteredPost) {
    return { filtered: filteredPost, slug: params.slug };
  }
  throw error(404, "Not found.");
};
