<script context="module" lang="ts">
  import PostPage from "$src/lib/elements/postPage.svelte";
  import { posts, type Post } from "$src/lib/slug";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ params }) => {
    const filteredPost = posts.find((post) => post.slug === params.slug.toLowerCase());
    // const header = url.searchParams.get("header") === "false" ? false : true;
    return filteredPost
      ? {
          props: { post: filteredPost },
        }
      : { status: 404, error: new Error("Not found.") };
  };
</script>

<script lang="ts">
  export let post: Post;
</script>

<PostPage {post} />
