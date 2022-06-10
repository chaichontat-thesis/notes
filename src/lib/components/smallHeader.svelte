<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<header class="not-prose flex gap-x-3">
  <div class="flex flex-col gap-y-1">
    <p class="text-xl font-bold">{metadata.title ?? "Untitled"}</p>
    {#if metadata.subtitle ?? false}
      <p class="text-lg font-medium">{metadata.subtitle}</p>
    {/if}
    {#if metadata.date ?? false}
      <p class="text-lg">{metadata.date}</p>
    {/if}
  </div>
</header>
