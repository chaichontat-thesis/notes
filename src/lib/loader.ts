import { browser } from "$app/env";
import pako from "pako";
import Papa from "papaparse";

export const decompressBlob =
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

export async function getRange(url: string, range: [number, number], compressed: boolean = true) {
  const resp = await fetch(url, {
    headers: {
      Range: `bytes=${range[0]}-${range[1]}`,
    },
  });

  return compressed ? await resp.blob().then(decompressBlob) : await resp.arrayBuffer();
}

export async function processCSV(csv: string, parse = true) {
  const resp = await fetch(csv);

  const d = Papa.parse(await resp.text(), { fastMode: true, transform: (x: string) => (x ? Number(x) : "") })
    .data as number[][];
  if (!parse) return d;
  // corr.seq = Papa.parse(seqcorr, { fastMode: true, transform: (x: string) => (x ? Number(x) : "") }).data as number[][];
  const temp = new Float32Array(d.length * d[0].length);
  d.forEach((row, i) => {
    row.forEach((v, j) => {
      temp[i * d[0].length + j] = v;
    });
  });
  return temp;
}
