<script>
  // MDSveX does not support TS.
  export let title;
  export let date;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="space-y-12">
  <section class="flex items-center gap-x-6">
    <p class="text-4xl font-bold">{title}</p>
    <p class="text-xl">{date}</p>
  </section>

  <article class="prose lg:prose-lg">
    <slot />
  </article>
</div>
