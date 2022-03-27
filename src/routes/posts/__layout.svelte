<script lang="ts">
  import { afterUpdate } from "svelte";
  import tippy from "tippy.js";

  const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  function makeLiteralLinks(bibs: HTMLDivElement) {
    let csl: HTMLDivElement;
    for (csl of bibs.getElementsByClassName("csl-entry")) {
      csl.innerHTML = csl.innerHTML.replace(url, "<a href='$&'>$&</a>");
    }
  }

  // inline citation
  function getBibEntry(el: HTMLDivElement): string {
    const citekey = el.getAttribute("id")?.split("-").slice(1, -1).join("-");
    const bibNode = document.getElementById(`bib-${citekey}`);
    return bibNode?.innerHTML ?? "";
  }

  // Useful when writing.
  afterUpdate(() => {
    const bibs = document.getElementById("refs") as HTMLDivElement;
    makeLiteralLinks(bibs);

    let el: HTMLDivElement;
    for (el of document.getElementsByClassName("citation")) {
      const bibEntry = getBibEntry(el);

      // const newNode = document.createElement("aside");
      // newNode.innerHTML = bibEntry;
      // el.parentNode?.parentNode?.insertBefore(newNode, el.parentNode);

      tippy(el, {
        content: bibEntry,
        theme: "light-border",
        allowHTML: true,
        arrow: true,
        animation: "fade",
        duration: [200, 250],
        interactive: true,
      });
    }
  });
</script>

<article class="prose max-w-none">
  <slot />
</article>

<style lang="postcss">
  /* Styles */
  article :global(.citation) {
    @apply text-blue-900;
  }

  article :global(.references) {
    @apply pl-8 -indent-8 text-xs text-gray-600 sm:text-sm;
  }

  article :global(h2 a) {
    @apply text-black no-underline;
  }

  article :global(h3 a) {
    @apply text-black no-underline;
  }

  /* Asides */
  @media (max-width: 768px) {
    article :global(aside) {
      @apply float-left clear-both mb-4 block w-full rounded bg-gray-50 px-4 py-2;
      vertical-align: baseline;
    }
  }

  article :global(aside) {
    @apply relative float-right clear-right mt-1 text-sm text-gray-600 md:w-[22.5%] lg:w-[30%];
  }

  article > :global(:not(aside)) {
    /* Move away */
    @apply w-full md:w-[75%] lg:w-[65%];
  }

  /* Citation and tippy */
  article :global(.citation) {
    @apply cursor-help;
  }
  article :global(.tippy-box[data-theme~="light-border"]) {
    @apply z-50 rounded-lg bg-white/90 px-2 pb-3 pt-2 text-sm text-gray-800 shadow-lg shadow-blue-100/50 backdrop-blur transition-all hover:shadow-blue-100 md:min-w-[500px] md:text-base;
    border: 1px solid rgba(0, 8, 16, 0.1) !important;
  }

  article :global(.tippy-box[data-theme~="light-border"][data-placement^="top"] > .tippy-arrow::after) {
    @apply border-t-gray-200;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="bottom"] > .tippy-arrow::after) {
    @apply border-b-gray-200;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="left"] > .tippy-arrow::after) {
    @apply border-l-gray-200;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="right"] > .tippy-arrow::after) {
    @apply border-r-gray-200;
  }
  article :global(.tippy-content) {
    @apply translate-x-2 -indent-2;
  }

  article :global(.references) {
    @apply overflow-x-hidden;
  }
</style>
