<script>
  import { Card, Button } from 'flowbite-svelte';
  export let imageUrl = '';
  export let productName = '';
  export let url = '#';
</script>

<Card padding="none" size="none" class="justify-around">
  <img class="p-8 max-h-56 h-full object-contain rounded-t-lg" src={imageUrl} alt="product 1" />
  <div class="px-5 pb-5">
    <div class="flex justify-center items-center flex-col gap-6">
      <a href="/">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
      </a>
      <Button href={url}>Customize</Button>
    </div>
  </div>
</Card>
