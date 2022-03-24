<script lang="ts">
  import { onMount } from "svelte";
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css";
  import "tippy.js/themes/light-border.css";

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

  onMount(() => {
    const bibs = document.getElementById("refs") as HTMLDivElement;
    makeLiteralLinks(bibs);

    for (const el of document.getElementsByClassName("citation")) {
      const bibEntry = getBibEntry(el as HTMLDivElement);
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
  :global(.citation) {
    @apply cursor-help;
  }

  :global(.tippy-box[data-theme~="light-border"]) {
    @apply z-50 rounded-lg bg-white/90 px-2 pb-3 pt-2 text-sm text-gray-800 shadow backdrop-blur md:min-w-[500px] md:text-base;
    border: 1px solid rgba(0, 8, 16, 0.1) !important;
  }

  /* :global(.tippy-box[data-theme~="light-border"][data-placement^="top"] > .tippy-arrow:after) {
    @apply border-t-gray-400;
    border: 8px solid transparent;
  }
  :global(.tippy-box[data-theme~="light-border"][data-placement^="bottom"] > .tippy-arrow:after) {
    @apply border-b-gray-400;
  }
  :global(.tippy-box[data-theme~="light-border"][data-placement^="left"] > .tippy-arrow:after) {
    @apply border-l-gray-400;
  }
  :global(.tippy-box[data-theme~="light-border"][data-placement^="right"] > .tippy-arrow:after) {
    @apply border-r-gray-400;
  } */

  :global(.tippy-content) {
    @apply translate-x-2 -indent-2;
  }
</style>
