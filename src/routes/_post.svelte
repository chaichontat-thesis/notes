<script>
  // MDSveX does not support TS.
  export let title;
  export let date;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article class="gap-y-12">
  <header class="flex items-center gap-x-6">
    <p class="text-4xl font-bold">{title}</p>
    <p class="text-xl">{date}</p>
  </header>

  <slot />
</article>

<style lang="postcss">
  article :global(aside) {
    @apply font-bold;
  }

  article :global(.citation) {
    @apply text-blue-900;
  }

  article :global(.references) {
    @apply translate-x-8 -indent-8 text-gray-600;
  }

  article :global(h2 a) {
    @apply text-black no-underline;
  }

  article :global(h3 a) {
    @apply text-black no-underline;
  }
</style>
