<script>
  // MDSveX does not support TS.
  // Most of the styling is in src/routes/posts/__layout.svelte.
  export let title;
  export let subtitle;
  export let date;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header class="not-prose flex w-full gap-x-3">
  <a href="/">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 translate-y-[6px] stroke-blue-800" fill="none" viewBox="0 0 24 24" stroke-width="3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  </a>
  <div class="flex flex-col gap-y-1">
    <p class="text-3xl font-bold">{title}</p>
    <p class="text-lg font-medium">{subtitle}</p>
    <p class="pl-0.5 text-lg">{date}</p>
  </div>
</header>

<section>
  <slot />
</section>

<style lang="postcss">
  /* Asides */
  section :global(aside) {
    @apply relative float-right clear-right mt-1 text-sm text-gray-600 md:w-[25%] lg:w-[30%];
  }

  section > :global(:not(aside)) {
    /* Move away */
    @apply w-full md:w-[67.5%] lg:w-[65%];
  }
</style>
