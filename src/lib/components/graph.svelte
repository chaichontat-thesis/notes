<script lang="ts">
  import embed, { type VisualizationSpec } from "vega-embed";
  export let spec: VisualizationSpec;
  embed("#vis", spec).catch(console.error);
</script>

<aside class="inline-block"><slot /></aside>
<div class="not-prose flex w-full justify-evenly">
  <figure id="vis" />
</div>
