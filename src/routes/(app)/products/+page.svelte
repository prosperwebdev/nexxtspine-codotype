<script>
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { Search, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
  let filterText = $state('');

  const filterProducts = (e) => {
    console.log(filterText);
  };

  const products = $state([
    {
      name: 'Cervical',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.89.png',
      url: '#'
    },
    {
      name: 'SA Cervical',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2023/08/sa-cervical-square.png',
      url: '#'
    },
    {
      name: 'TLIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.88.png',
      url: '#'
    },
    {
      name: 'TLIF Oblique',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.87.png',
      url: '#'
    },
    {
      name: 'ALIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2021/02/Profile-.16-Copy-2.png',
      url: '#'
    },
    {
      name: 'SA ALIF',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2022/01/SA-ALIF-Image-NO-Shadow-e1642776756555.png',
      url: '/sa-alif'
    },
    {
      name: 'Lateral',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2021/01/Hero.11-Copy-Copy.png',
      url: '#'
    },
    {
      name: 'Corpectomy',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2020/04/Corpectomy.182.png',
      url: '#'
    },
    {
      name: 'VBR',
      imageUrl: 'https://nexxtspine.com/wp-content/uploads/2019/06/untitled.90-1.png',
      url: '#'
    }
  ]);

  let filteredProducts = $derived.by(() => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(filterText.toLowerCase());
    });
  });
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
  <div class="col-span-full">
    <form class="flex gap-2">
      <Search size="md" on:input={filterProducts} bind:value={filterText} />
      <Button class="!p-2.5">
        <SearchOutline class="w-6 h-6" />
      </Button>
    </form>
  </div>
  {#each filteredProducts as product}
    <ProductCard imageUrl={product.imageUrl} productName={product.name} />
  {/each}
</div>
