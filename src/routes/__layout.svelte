<script lang="ts">
  import "../app.css";
  import "prismjs/themes/prism.min.css";
  import "katex/dist/katex.min.css";
</script>

<main class="mx-auto mt-8 flex min-h-screen w-full max-w-4xl flex-col px-16">
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif, Helvetica, Arial, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji";
  }
</style>
