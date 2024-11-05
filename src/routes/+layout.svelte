<script>
  import '../app.css';
  let { children } = $props();
</script>

<main class="h-full w-full">
  {@render children()}
</main>

<style>
  :global(body) {
    height: 100dvh;
  }
</style>
