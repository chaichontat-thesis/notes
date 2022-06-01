<script lang="ts">
  import embed, { type VisualizationSpec } from "vega-embed";
  export let spec: VisualizationSpec;
  export let caption = "";

  embed("#vis", spec).catch(console.error);
</script>

<aside class="inline-block">Figure 1: {caption}</aside>
<div class="not-prose flex w-full justify-evenly">
  <figure id="vis" />
</div>
