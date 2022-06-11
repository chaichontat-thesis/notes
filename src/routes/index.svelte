<script lang="ts">
  // https://mdsvex.pngwn.io/docs#frontmatter-1
  import { posts } from "$lib/slug";
</script>

<section class="prose mx-auto max-w-5xl md:prose-lg">
  <h1>Welcome</h1>

  <div class="flex flex-col">
    {#each Object.entries(posts) as [path, post]}
      <p class="md:my-3">
        {#if post.post.metadata.date ?? false}
          <span class="float-right">{post.post.metadata.date}</span>
        {/if}
        <a class="mr-6" href={`posts/${post.slug}`}>{post.post.metadata.title}</a>
      </p>
    {/each}
  </div>
</section>
