<script>
  import { Card } from 'flowbite-svelte';
  import { CirclePlusOutline, ArrowsRepeatOutline } from 'flowbite-svelte-icons';
  import InstrumentSets from '../../../lib/components/InstrumentSets.svelte';
</script>

<div class="grid p-6 gap-6 grid-cols-[1fr_1fr]">
  <Card size="none">
    <CirclePlusOutline class="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400" />
    <a href="/">
      <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">New order</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Place a new order</p>
    <!-- <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
      See our guideline
      <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
    </a> -->
  </Card>

  <Card size="none">
    <ArrowsRepeatOutline class="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400" />
    <a href="/">
      <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">Recent cases</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Orders placed in the last 30 days</p>
    <!-- <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
      See our guideline
      <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
    </a> -->
  </Card>

  <div class="col-span-full">
    <InstrumentSets />
  </div>
</div>
