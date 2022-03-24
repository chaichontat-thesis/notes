<script lang="ts">
  import "../app.css";
  import "prismjs/themes/prism.min.css";
  import "katex/dist/katex.min.css";
</script>

<main class="mx-auto mt-8 mb-12 min-h-screen w-11/12 max-w-6xl text-sm sm:text-base md:w-10/12">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif, Helvetica, Arial, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji";
  }
</style>
