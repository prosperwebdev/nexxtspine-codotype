<script>
  import { Timeline, TimelineItem, Card, Button, Listgroup, ListgroupItem, Search, Drawer, CloseButton } from 'flowbite-svelte';
  import { ArrowsRepeatOutline, InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  import OrderSummary from './OrderSummary.svelte';
  import { orderOne } from '$lib/sampleOrders.js';

  import { onMount } from 'svelte';
  let filterText = $state('');

  onMount(() => {
    let searchString = new URLSearchParams(window.location.search).get('search');
    if (searchString) {
      filterText = searchString;
    }
  });

  let hidden = $state(true);
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };

  const orders = [
    {
      id: 1,
      title: 'Stand Alone Alif',
      date: 'January 13th, 2022',
      hospital: 'Maine Medical Center',
      surgeon: 'Nick Andrews, MD'
    },
    {
      id: 1,
      title: 'Stand Alone Alif',
      date: 'January 13th, 2022',
      hospital: 'Southern Maine Medical Center',
      surgeon: 'Dr. Samantha Thompson'
    },
    {
      id: 1,
      title: 'Stand Alone Alif',
      date: 'January 13th, 2022',
      hospital: 'Boston Medical Center',
      surgeon: 'Dr. Emily Patel'
    },
    {
      id: 1,
      title: 'Stand Alone Alif',
      date: 'January 13th, 2022',
      hospital: 'Boston Medical Center',
      surgeon: 'Dr. Emily Patel'
    },
    {
      id: 1,
      title: 'Stand Alone Alif',
      date: 'January 13th, 2022',
      hospital: 'Portsmouth Hospital',
      surgeon: 'Dr. Olivia Lee'
    }
  ];

  let filteredOrders = $derived.by(() => {
    return orders.filter((order) => {
      return (
        order.surgeon.toLowerCase().includes(filterText.toLowerCase()) ||
        order.hospital.toLowerCase().includes(filterText.toLowerCase()) ||
        order.title.toLowerCase().includes(filterText.toLowerCase())
      );
    });
  });
</script>

<form class="flex gap-2 mb-4">
  <Search size="md" placeholder="Filter orders" bind:value={filterText} />
</form>

<Card class="w-full min-w-full">
  <Timeline>
    {#each filteredOrders as order}
      <TimelineItem title={order.title} date={order.date}>
        <Listgroup active class="w-full border-none">
          <ListgroupItem>
            <a class="text-primary-600 underline dark:text-primary-500 hover:no-underline" onclick={() => (hidden = !hidden)}> View order details </a>
          </ListgroupItem>
          <ListgroupItem class="border-none text-sm font-normal gap-2">Surgeon:<span class="text-xs font-bold">{order.surgeon}</span></ListgroupItem>
          <ListgroupItem class="border-none text-sm font-normal gap-2">Hospital<span class="text-xs font-bold">{order.hospital}</span></ListgroupItem>
        </Listgroup>

        <Button color="alternative" class="mt-2">Re-order<ArrowsRepeatOutline class="ms-2 w-5 h-5" /></Button>
      </TimelineItem>
    {/each}
  </Timeline>
</Card>

<Drawer placement="right" transitionType="fly" transitionParams={transitionParamsRight} {hidden} bgOpacity="bg-opacity-80">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Order number: 123456
    </h5>
    <CloseButton on:click={() => (hidden = !hidden)} class="mb-4 dark:text-white" />
  </div>

  <div class="space-y-2">
    <OrderSummary orders={orderOne} />
  </div>
</Drawer>
