<script lang="ts">
  import ArrowBack from "$src/lib/components/arrowBack.svelte";
  import PostPage from "$src/lib/elements/postPage.svelte";
  export let data;
  let { filtered, slug } = data;
</script>

<header class="prose flex items-center gap-x-3">
  <ArrowBack />
  <h1 class="text-neutral-800">Tag: {slug}</h1>
</header>

<section class="mt-4 flex flex-col gap-y-10 divide-y-2">
  {#if filtered.length > 0}
    {#each filtered as post}
      <div class="pt-8">
        <PostPage {post} arrow={false} />
      </div>
    {/each}
  {:else}
    <p class="mt-4 text-xl">No posts found.</p>
  {/if}
</section>
