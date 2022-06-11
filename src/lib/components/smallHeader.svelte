<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let date: string;
</script>

<header class="not-prose flex gap-x-3">
  <div class="flex flex-col gap-y-1">
    <p class="text-xl font-bold">{title ?? "Untitled"}</p>
    {#if subtitle ?? false}
      <p class="text-lg font-medium">{subtitle}</p>
    {/if}
    {#if date ?? false}
      <p class="text-lg">{date}</p>
    {/if}
  </div>
</header>
