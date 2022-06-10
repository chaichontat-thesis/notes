<script lang="ts">
  import type { Post } from "$lib/slug";
  import ArrowBack from "./arrowBack.svelte";
  export let metadata: Post["post"]["metadata"];
</script>

<header class="not-prose flex gap-x-3">
  <ArrowBack />
  <div class="flex flex-col gap-y-1">
    <p class="text-3xl font-bold">{metadata.title ?? "Untitled"}</p>
    {#if metadata.subtitle ?? false}
      <p class="text-lg font-medium">{metadata.subtitle}</p>
    {/if}
    {#if metadata.date ?? false}
      <p class="text-lg">{metadata.date}</p>
    {/if}
    {#if metadata.tags ?? false}
      <p>
        Tags:
        {#each metadata.tags as tag}
          <a class="text-neutral-800 hover:text-neutral-600" href={"/tags/" + tag}>{tag}</a>
        {/each}
      </p>{/if}
  </div>
</header>
