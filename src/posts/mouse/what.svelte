<script lang="ts">
  import PngViewer from "$src/lib/components/pngViewer.svelte";
  import { throttle } from "lodash-es";
  import c from "./xtrials0pos.json";
  import c1 from "./xtrials1pos.json";

  //   const c = JSON.parse(header);
  let pos = 100;
  let pos_t = 100;

  const x = throttle((p: number) => (pos_t = p), 100);

  $: x(pos);
</script>

<div class="flex gap-x-6">
  <span>
    Neuron: <input type="number" bind:value={pos} class="ml-1 w-24 rounded border bg-neutral-50 py-1 px-2" />
  </span>
  <input class="flex-grow" type="range" bind:value={pos} min="0" max={c.idx.length - 1} step="1" />
</div>
<div class="h-5" />
<aside>Sequential</aside>
<PngViewer url="https://chaichontat-host.s3.amazonaws.com/movie/xtrials0.bin" header={c} pos={pos_t} />
<aside class="mt-3">Scrambled</aside>
<div class="mt-4">
  <PngViewer url="https://chaichontat-host.s3.amazonaws.com/movie/xtrials1.bin" header={c1} pos={pos_t} xlabel="Step" />
</div>
