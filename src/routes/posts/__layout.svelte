<script lang="ts">
  import { onMount } from "svelte";
  import tippy from "tippy.js";

  const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  function makeLiteralLinks(bibs: HTMLDivElement) {
    let csl: HTMLDivElement;
    for (csl of bibs.getElementsByClassName("csl-entry")) {
      csl.innerHTML = csl.innerHTML.replace(url, "<a href='$&'>$&</a>");
    }
  }

  // inline citation
  function getBibEntry(citekey: string): string {
    const bibNode = document.getElementById(`bib-${citekey}`);
    return bibNode?.innerHTML ?? "";
  }

  // Useful when writing.
  onMount(() => {
    const bibs = document.getElementById("refs") as HTMLDivElement | null;
    if (bibs) makeLiteralLinks(bibs);

    let el: HTMLDivElement;
    for (el of document.getElementsByClassName("citation")) {
      const bibEntry = `<div><div>${el.getAttribute("id")?.split("--").slice(1, -1).map(getBibEntry).join("</div><div>")}</div></div>`;
      // const bibEntry = getBibEntry(el);

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

<article class="prose max-w-none leading-normal md:leading-relaxed">
  <slot />
</article>

<style lang="postcss">
  .sidebar {
    @apply float-right clear-right text-sm text-gray-600 md:w-[25%] lg:w-[30%];
  }

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

  @media (max-width: 768px) {
    article :global(aside) {
      @apply float-left clear-both mb-4 block w-full rounded bg-gray-100 px-4 py-2;
      vertical-align: baseline;
    }
  }

  /* Asides */
  article :global(aside) {
    @apply sidebar;
  }

  article :global(aside > p) {
    @apply my-1;
  }

  article :global(aside > figure) {
    @apply mx-auto max-w-[90%] -translate-y-4;
  }

  article :global(aside img) {
    @apply max-w-[200px] rounded-lg;
  }

  article :global(aside a) {
    @apply font-normal text-gray-800;
  }

  article > :global(:not(aside, header, .references)) {
    /* Move away */
    @apply w-full md:w-[65%] lg:w-[60%];
  }

  /* TOC */

  article :global(.toc) {
    @apply sidebar sticky top-0 z-50 ml-2 w-full border-b bg-neutral-50 pt-8 pb-3 font-serif text-sm;
  }

  article :global(.toc .toc-item) {
    @apply font-medium leading-relaxed text-gray-700;
  }

  article :global(.toc a) {
    @apply underline-offset-2 hover:underline;
  }

  article :global(.toc .toc-item-h2) {
    @apply pt-1;
  }

  article :global(.toc .toc-item-h3) {
    @apply pl-4 text-xs font-normal;
  }

  /* Citation and tippy */
  article :global(.citation) {
    @apply cursor-help;
  }
  article :global(.tippy-box[data-theme~="light-border"]) {
    @apply z-50 min-w-[400px] rounded-lg bg-white/90 pr-3 pl-2 pb-3 pt-2 text-sm text-gray-800 shadow-lg shadow-blue-100/50 backdrop-blur transition-all hover:shadow-blue-100 md:min-w-[500px] md:text-base;
  }

  article :global(.tippy-box[data-theme~="light-border"][data-placement^="top"] > .tippy-arrow::after) {
    @apply border-t-gray-300;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="bottom"] > .tippy-arrow::after) {
    @apply border-b-gray-300;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="left"] > .tippy-arrow::after) {
    @apply border-l-gray-300;
  }
  article :global(.tippy-box[data-theme~="light-border"][data-placement^="right"] > .tippy-arrow::after) {
    @apply border-r-gray-300;
  }
  article :global(.tippy-content) {
    @apply translate-x-2 -indent-2;
  }
  article :global(.tippy-content > div) {
    @apply flex flex-col gap-y-3;
  }

  article :global(.references) {
    @apply flex flex-col gap-y-2 overflow-x-hidden;
  }
</style>
