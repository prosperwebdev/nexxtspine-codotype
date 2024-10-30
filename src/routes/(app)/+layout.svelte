<script>
  import '../../app.css';
  import Header from '$lib/components/header.svelte';
  let { children } = $props();
</script>

<main class="h-full">
  <Header />
  {@render children()}
</main>

<style>
  :global(body) {
    height: 100dvh;
  }
</style>
