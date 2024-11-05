<script>
  import { Card } from 'flowbite-svelte';
  import { CirclePlusOutline, ArrowsRepeatOutline } from 'flowbite-svelte-icons';
  import SurgeonsList from '../../../lib/components/SurgeonsList.svelte';
</script>

<div class="grid p-4 gap-6 grid-cols-[1fr_1fr]">
  <Card size="none" href="/products">
    <CirclePlusOutline class="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400" />
    <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">New order</h5>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Place a new order</p>
  </Card>

  <Card size="none" href="/recent-orders">
    <ArrowsRepeatOutline class="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400" />
    <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">Recent orders</h5>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Orders placed in the last 30 days</p>
  </Card>

  <div class="col-span-full">
    <SurgeonsList />
  </div>
</div>
