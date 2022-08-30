<script lang="ts">
  import PostPage from "$src/lib/elements/postPage.svelte";
  export let data;
  let { post } = data;
</script>

<PostPage {post} />
