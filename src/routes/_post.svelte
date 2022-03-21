<script>
  // MDSveX does not support TS.
  export let title;
  export let date;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{title}

{date}

<article class="prose lg:prose-xl">
  <slot />
</article>
