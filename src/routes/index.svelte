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

<section class="prose mx-auto max-w-5xl md:prose-lg">
  <h1>Welcome</h1>

  <div class="flex flex-col">
    {#each Object.entries(posts) as [path, post]}
      <p class="my-3 leading-relaxed md:my-3">
        <!-- {eslint-disable-next-line @typescript-eslint/no-unsafe-call} -->
        <span class="float-right">{post.metadata.date}</span>
        <a class="mr-6" href={path.split(".").slice(0, -1).join(".")}>{post.metadata.title}</a>
      </p>
    {/each}
  </div>
</section>
