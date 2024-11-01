<script>
  import SaAlifOptions from '../../../../lib/components/SaAlifOptions.svelte';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<div class="p-3">
  <Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/dashboard" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/products">Products</BreadcrumbItem>
    <BreadcrumbItem>Stand Alone Alif</BreadcrumbItem>
  </Breadcrumb>
</div>

<div class="p-6">
  <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
    <img
      class="w-full max-h-24 object-contain"
      src="https://nexxtspine.com/wp-content/uploads/2022/01/SA-ALIF-Image-NO-Shadow-e1642776756555.png"
      alt="" />
  </div>

  <div class="mt-6 sm:mt-8 lg:mt-0">
    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white text-center">Stand Alone Alif</h1>
    <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
      <!-- <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">$1,249.99</p> -->
    </div>

    <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

    <SaAlifOptions />
  </div>
</div>
