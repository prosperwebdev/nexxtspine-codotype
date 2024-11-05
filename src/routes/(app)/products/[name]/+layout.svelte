<script>
  import StepperButton from '$lib/components/StepperButton.svelte';
  let { children } = $props();
</script>

<div class="products-container">
  <div class="products-body">
    {@render children()}
  </div>
  <StepperButton />
</div>

<style>
  :global(body) {
    height: 100dvh;
  }

  .products-container {
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
  }

  .products-body {
    overflow: auto;
    height: 100%;
  }
</style>
