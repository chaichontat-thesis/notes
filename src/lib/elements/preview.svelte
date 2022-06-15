<script lang="ts">
  import { onMount } from "svelte";
  import { getCitation } from "../cite";
  import type { Post } from "../slug";

  export let post: Post;
  export let arrow = true;
  export let toc = true;

  const metadata = post.post.metadata;
  const citation = metadata.citekey ? getCitation(metadata.citekey) : undefined;
  const uid = Math.random().toString(36).substring(2);

  function makeLiteralLinks(bibs: HTMLDivElement) {
    let csl: HTMLDivElement;
    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // for (const x of document.getElementsByClassName("toc")) {
    //   x.remove();
    // }

    const bibs = document.getElementsByClassName("references")[0] as HTMLDivElement | null;
    if (bibs) makeLiteralLinks(bibs);

    if (metadata.citekey) {
      const div = document.createElement("div");
      div.innerHTML = citation.html;
      makeLiteralLinks(div);
      node.getElementsByClassName("toc")[0].appendChild(div);
    }
  });
</script>

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<div id={`preview-${uid}`}>
  <article class="prose max-w-none leading-normal">
    <svelte:component this={post.post.default} />
  </article>
</div>

<style lang="postcss">
  :global(.toc) {
    @apply hidden;
  }

  article {
    @apply text-sm;
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

  article :global(.references) {
    @apply flex flex-col gap-y-2 overflow-x-hidden;
  }
</style>
