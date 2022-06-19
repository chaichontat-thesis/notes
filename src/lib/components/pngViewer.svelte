<script lang="ts">
  import * as d3 from "d3";
  import { axisBottom, axisLeft } from "d3-axis";
  import { onMount } from "svelte";

  export let data: Promise<Uint8Array | Float32Array> | Uint8Array | Float32Array;
  export let header: { width: number; height: number };

  export let xlabel: string | undefined = undefined;
  export let ylabel: string | undefined = undefined;
  export let minmax: [number, number] = [0, 255];
  export let diverging = false;
  export let cmap: (t: number) => string;

  export let axes: { x?: boolean; y?: boolean } = { x: true, y: true };
  export let scale = 1;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let scaleCanvas: HTMLCanvasElement;
  let ctx2: CanvasRenderingContext2D;
  let svg: SVGSVGElement;

  const h = header.height;
  const w = header.width;
  const arr = new Uint8ClampedArray(h * w * 4);
  const mag = Math.max(Math.abs(minmax[0]), Math.abs(minmax[1]));

  function transform(v: number) {
    if (diverging) {
      return v / mag + 0.5;
    } else {
      return (v - minmax[0]) / (minmax[1] - minmax[0]);
    }
  }

  async function refresh(d: Promise<Uint8Array | Float32Array> | Uint8Array | Float32Array) {
    if (d instanceof Promise) {
      d = await d;
    }
    if (!d) return;

    d.forEach((v, i) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const c = d3.color(cmap(transform(v)))!.rgb();
      arr[i * 4] = c.r;
      arr[i * 4 + 1] = c.g;
      arr[i * 4 + 2] = c.b;
      arr[i * 4 + 3] = 255;
    });

    if (ctx) {
      ctx2.clearRect(0, 0, header.width, header.height);
      ctx2.putImageData(new ImageData(arr, header.width, header.height), 0, 0);
      ctx.drawImage(scaleCanvas, 0, 0);
    }
  }

  function addText(node: d3.Selection<SVGGElement, unknown, null, undefined>, label: string | undefined, xy: "x" | "y") {
    node.call((g) => {
      g.select(".domain").remove();
      g.append("text")
        .attr("x", xy === "x" ? w * scale + 5 : 0)
        .attr("y", xy === "x" ? -3 : -8)
        .attr("fill", "#171717")
        .attr("font-size", 12)
        .attr("font-weight", 500)
        .attr("text-anchor", xy === "x" ? "start" : "end")
        .text(xy === "x" ? label ?? null : null);
      g.selectAll(".tick text").attr("font-size", 11);
    });
  }

  $: refresh(data).catch(console.error);

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ctx = canvas.getContext("2d")!;
    scaleCanvas = document.createElement("canvas");
    scaleCanvas.height = header.height;
    scaleCanvas.width = header.width;
    ctx2 = scaleCanvas.getContext("2d")!;
    ctx.scale(scale, scale);

    if (axes.x) {
      d3.select(svg)
        .append("g")
        .attr("transform", `translate(0, ${h * scale})`)
        .call(axisBottom(d3.scaleLinear([0, w * scale]).domain([0, 600])).ticks(5))
        .call((g) => addText(g, xlabel, "x"));
    }

    if (axes.y) {
      d3.select(svg)
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(
          axisLeft(d3.scaleLinear([0, h * scale]).domain([0, 200]))
            .ticks(5)
            .tickFormat((d) => (d === 0 ? `${ylabel ?? ""} ${d}` : d))
        )
        .call((g) => addText(g, ylabel, "y"));
    }
  });
</script>

<div class="relative" class:mb-4={axes.x}>
  <canvas class="relative" bind:this={canvas} height={h * scale} width={w * scale} />
  <svg class="absolute top-0 left-0 overflow-visible" bind:this={svg} />
</div>

<style>
  canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }
</style>
