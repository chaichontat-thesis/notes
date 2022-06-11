<script lang="ts" context="module">
  import { posts } from "$src/lib/slug";
  import { Fzf } from "../../../node_modules/fzf";

  const fzf = new Fzf(posts, { selector: (post) => post.raw });

  function highlightChars(str: string, indices: Set<number>): string {
    const chars = str.split("");
    return chars.map((c, i) => (indices.has(i) ? `<b>${c}</b>` : c)).join("");
  }
</script>

<script lang="ts">
  console.log(fzf);
</script>
