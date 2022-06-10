<script context="module" lang="ts">
  export type Post = { metadata: { title: string; date: string } };
  import { slugFromName } from "$src/lib/slug";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const posts = await fetch("/posts.json").then((r) => r.json());
    return { props: { posts } };
  };
</script>

<script lang="ts">
  // https://mdsvex.pngwn.io/docs#frontmatter-1
  export let posts: Record<string, Post>;
</script>

<section class="prose mx-auto max-w-5xl md:prose-lg">
  <h1>Welcome</h1>

  <div class="flex flex-col">
    {#each Object.entries(posts) as [path, post]}
      <p class="md:my-3">
        {#if post.metadata.date ?? false}
          <span class="float-right">{post.metadata.date}</span>
        {/if}
        <a class="mr-6" href={"posts/" + slugFromName(post.metadata.title)}>{post.metadata.title}</a>
      </p>
    {/each}
  </div>
</section>
