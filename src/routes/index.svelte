<script context="module" lang="ts">
  export type Post = { metadata: { title: string; date: string } };
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export function load() {
    const posts = import.meta.globEager("./posts/*.{md,svx,svelte.md}");
    return { props: { posts } };
  }
</script>

<script lang="ts">
  // https://mdsvex.pngwn.io/docs#frontmatter-1
  export let posts: Record<string, Post>;
  console.log(posts["./posts/test.md"].metadata);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
  to read the documentation
</p>

{#each Object.entries(posts) as [path, post]}
  <section class="my-2">
    <!-- {eslint-disable-next-line @typescript-eslint/no-unsafe-call} -->
    <a href={path.slice(0, -3)}>Hi</a>
  </section>
{/each}
