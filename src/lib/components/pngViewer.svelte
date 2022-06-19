<script lang="ts">
  import { browser } from "$app/env";
  import * as d3 from "d3";
  import { axisBottom, axisLeft } from "d3-axis";
  import pako from "pako";
  import { onMount } from "svelte";

  export let url: string;
  export let header: { width: number; height: number; idx: number[] };
  export let pos: number;

  export let xlabel: string | undefined = undefined;
  export let ylabel: string | undefined = undefined;
  export let minmax: [number, number] = [0, 5];

  export let axes: { x?: boolean; y?: boolean } = { x: true, y: true };

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let svg: SVGSVGElement;

  const decompressBlob =
    browser && "CompressionStream" in window // Chromium
      ? async (blob: Blob) => {
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
            const ds = new DecompressionStream("gzip");
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
            const decompressedStream = blob.stream().pipeThrough(ds);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return await new Response(decompressedStream).arrayBuffer();
          } catch (e) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            throw new Error(`Error decompressing blob: ${e}`);
          }
        }
      : async (blob: Blob) => {
          return pako.inflate((await blob.arrayBuffer()) as pako.Data);
        };

  async function refresh(pos: number) {
    pos = Number(pos);
    const resp = await fetch(url, {
      headers: {
        Range: `bytes=${header.idx[pos]}-${header.idx[pos + 1] - 1}`,
      },
    });

    const deped = await resp.blob().then(decompressBlob);
    const uint8array = new Uint8Array(deped);
    const arr = new Uint8ClampedArray(uint8array.length * 4);
    uint8array.forEach((v, i) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const c = d3.color(d3.interpolateMagma(v / 255))!.rgb();
      arr[i * 4] = c.r;
      arr[i * 4 + 1] = c.g;
      arr[i * 4 + 2] = c.b;
      arr[i * 4 + 3] = 255;
    });

    if (ctx) {
      ctx.clearRect(0, 0, header.width, header.height);
      ctx.putImageData(new ImageData(arr, header.width, header.height), 0, 0);
    }
  }

  function addText(node: d3.Selection<SVGGElement, unknown, null, undefined>, label: string | undefined, xy: "x" | "y") {
    node.call((g) => {
      g.select(".domain").remove();
      g.append("text")
        .attr("x", xy === "x" ? 600 + 5 : 0)
        .attr("y", xy === "x" ? -3 : -8)
        .attr("fill", "currentColor")
        .attr("font-size", 12)
        .attr("font-weight", 500)
        .attr("text-anchor", xy === "x" ? "start" : "end")
        .text(label ?? null);
      g.selectAll(".tick text").attr("font-size", 9);
    });
  }

  $: refresh(pos).catch(console.error);
  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ctx = canvas.getContext("2d")!;

    if (axes.x) {
      d3.select(svg)
        .append("g")
        .attr("transform", `translate(0, ${199})`)
        .call(axisBottom(d3.scaleLinear([0, 600]).domain([0, 600])))
        .call((g) => addText(g, xlabel, "x"));
    }

    if (axes.y) {
      d3.select(svg)
        .append("g")
        .attr("transform", `translate(0, 0)`)
        .call(axisLeft(d3.scaleLinear([0, 200 - 1]).domain([0, 200])).ticks(5))
        .call((g) => addText(g, ylabel, "y"));
    }
  });
</script>

<div class="relative" class:mb-4={axes.x}>
  <canvas class="relative" bind:this={canvas} height={header.height} width={header.width} />
  <svg class="absolute top-0 left-0 overflow-visible" bind:this={svg} />
</div>
