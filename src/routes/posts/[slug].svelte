<script context="module" lang="ts">
  import { slugFromName } from "$src/lib/slug";
  import type { SvelteComponent } from "svelte/internal";

  const posts = Object.values(import.meta.globEager(`$posts/*.md`))
    .filter((post) => post.metadata?.title)
    .map((post) => {
      const title = post.metadata.title as string;
      const slug = slugFromName(title);
      return { post, title, slug };
    });

  export function load({ params }) {
    const filteredPost = posts.find((post) => post.slug === params.slug.toLowerCase());
    return filteredPost
      ? {
          props: {
            page: filteredPost.post?.default,
          },
        }
      : { response: 404 };
  }
</script>

<script lang="ts">
  export let page: SvelteComponent | undefined;
</script>

<svelte:component this={page} />
