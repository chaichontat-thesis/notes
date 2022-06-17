<script lang="ts">
  import { browser } from "$app/env";
  import colormap from "colormap";
  import pako from "pako";
  import { onMount } from "svelte";
  export let url: string;
  export let header: { width: number; height: number; idx: number[] };
  export let pos: number;

  export let xlabel: string | undefined = undefined;
  export let cmap = "magma";
  export let minmax: [number, number] = [0, 5];

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

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

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ctx = canvas.getContext("2d")!;
  });

  const cmapp = colormap({ colormap: cmap, nshades: 256, format: "rba" });

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
      const [r, g, b, a] = cmapp[v];
      arr[i * 4] = r;
      arr[i * 4 + 1] = g;
      arr[i * 4 + 2] = b;
      arr[i * 4 + 3] = 255;
    });

    if (ctx) {
      ctx.clearRect(0, 0, header.width, header.height);
      ctx.putImageData(new ImageData(arr, header.width, header.height), 0, 0);
    }
  }

  $: refresh(pos).catch(console.error);
</script>

<div class="flex flex-col items-center">
  <div class="flex items-center">
    <p class="mr-1 -rotate-90">Trial</p>
    <canvas bind:this={canvas} id="imgviewer" height={header.height} width={header.width} />
  </div>
  {#if xlabel}
    <div class="mt-2">{xlabel}</div>
  {/if}
</div>
