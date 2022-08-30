<script lang="ts">
  import "../app.css";
</script>

<main class="mx-auto mt-12 mb-12 w-11/12 max-w-6xl">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    @apply bg-neutral-50;
  }
</style>
