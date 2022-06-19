<script lang="ts">
  export let data: number[][];
  import * as d3 from "d3";

  const color = [...Array(600).keys()].map((i) => d3.interpolateBlues(i / 600));
</script>

{#if data}
  <table class="not-prose overflow-x-auto">
    <thead>
      {#each data[0] as item}
        <th>{item}</th>
      {/each}
    </thead>
    <tbody>
      {#each data.slice(1) as row}
        <tr class="group">
          <td class="group-hover:bg-blue-100">{row[0]}</td>
          {#each row.slice(1) as item}
            <td style={`background-color: ${color[item]}; color: ${item > 300 ? "white" : "black"};`}>{item}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="postcss">
  table {
    /* w-1% to not expand to parent width. */
    @apply w-[1%] font-sans text-[11px] leading-tight;
  }

  thead {
    @apply border-b text-right;
  }

  th {
    @apply px-2 py-1 font-medium;
  }

  /* Body */
  td {
    @apply py-1 px-2 text-center tabular-nums;
  }

  tr:nth-child(even) {
    @apply bg-gray-100;
  }

  tbody td:first-child {
    @apply text-right font-medium;
  }

  th:first-child {
    @apply border-r;
  }
</style>
