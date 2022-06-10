<script lang="ts" context="module">
  import { posts } from "$lib/slug";
  import ArrowBack from "$src/lib/components/arrowBack.svelte";
  import PostPage from "$src/lib/components/postPage.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ params }) => {
    const filteredPost = posts.filter((post) => post.post.metadata.tags?.includes(params.slug) && post.post.metadata.citekey);
    // const header = url.searchParams.get("header") === "false" ? false : true;
    return filteredPost
      ? {
          props: { filtered: filteredPost, slug: params.slug },
        }
      : { status: 404, error: new Error("Not found.") };
  };
</script>

<script lang="ts">
  export let filtered: typeof posts;
  export let slug: string;
</script>

<header class="prose flex gap-x-3">
  <ArrowBack />
  <h1 class="text-neutral-800">Tag: {slug}</h1>
</header>

<section class="mt-4 flex flex-col gap-y-6 divide-y-2">
  {#each filtered as post}
    <div class="pt-6">
      <PostPage {post} header={false} />
    </div>
  {/each}
</section>
