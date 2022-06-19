<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { Legend } from "../legend";

  export let title: string;
  export let minmax: [number, number];
  export let cmap: (t: number) => string = d3.interpolateViridis;
  export let legendAnchor: "start" | "end" = "start";

  let svg: SVGSVGElement;

  onMount(() => {
    Legend(d3.select(svg), d3.scaleSequential(minmax, cmap), {
      title,
      legendAnchor,
    });

    // https://github.com/observablehq/plot#plotlegendscalename-options
    // w = Plot.legend({
    //   color: {
    //     domain: [400, 750],
    //   },
    //   width: 350,
    //   ticks: 10,
    //   label: "Wavelength (nm) →",
    //   marginRight: 1,
    //   style: {
    //     background: "transparent",
    //     "font-weight": 500,
    //     "font-family": "inherit",
    //     "text-align": "right",
    //   },
    // });

    // document.getElementById("dfdf")?.appendChild(w);
  });
</script>

<svg bind:this={svg} />
