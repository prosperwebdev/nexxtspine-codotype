<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { Search, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';

  let products = [
    {
      name: 'Cervical',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.89.png'
    },
    {
      name: 'SA Cervical',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2023/08/sa-cervical-square.png'
    },
    {
      name: 'TLIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.88.png'
    },
    {
      name: 'TLIF Oblique',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.87.png'
    },
    {
      name: 'ALIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2021/02/Profile-.16-Copy-2.png'
    },
    {
      name: 'SA ALIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2022/01/SA-ALIF-Image-NO-Shadow-e1642776756555.png'
    },
    {
      name: 'Lateral',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2021/01/Hero.11-Copy-Copy.png'
    },
    {
      name: 'Corpectomy',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2020/04/Corpectomy.182.png'
    },
    {
      name: 'VBR',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.90-1.png'
    }
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
  <div class="col-span-full">
    <form class="flex gap-2">
      <Search size="md" />
      <Button class="!p-2.5">
        <SearchOutline class="w-6 h-6" />
      </Button>
    </form>
  </div>
  {#each products as product}
    <ProductCard imageUrl={product.imageUrl} productName={product.name} />
  {/each}
</div>
