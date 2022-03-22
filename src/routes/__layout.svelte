<script lang="ts">
  import "../app.css";
  import "prismjs/themes/prism-solarizedlight.min.css";
  import "katex/dist/katex.min.css";
</script>

<main class="mt-8 flex min-h-screen flex-col">
  <div class="mx-auto w-full max-w-4xl px-16">
    <slot />
  </div>
</main>
