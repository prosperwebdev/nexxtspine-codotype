<script>
  import { Card, Listgroup, Avatar, Search, ListgroupItem } from 'flowbite-svelte';
  import { AngleRightOutline } from 'flowbite-svelte-icons';
  import surgeonData from '../surgeonData.json';
  let list = surgeonData;

  let filterText = $state('');

  let filteredSurgeons = $derived.by(() => {
    return list.filter((surgeon) => {
      return surgeon.name.toLowerCase().includes(filterText.toLowerCase());
    });
  });
</script>

<Card padding="xl" size="md" class="w-full min-w-full">
  <div class="flex justify-between items-center mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Surgeons</h5>
    <!-- <a href="/" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> View all </a> -->
  </div>
  <form class="flex gap-2 mb-4">
    <Search size="md" placeholder="Filter surgeons" bind:value={filterText} />
  </form>
  <Listgroup class="border-0 dark:!bg-transparent">
    {#each filteredSurgeons as surgeon}
      <a href={surgeon.url} class="flex items-center space-x-4 rtl:space-x-reverse">
        <ListgroupItem class="text-base font-semibold gap-2 flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar>{surgeon.initials}</Avatar>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {surgeon.name}
            </p>
            <p class="text-xs text-gray-500 truncate dark:text-gray-400">
              Date of surgery: {surgeon.last_date_of_surgery}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <AngleRightOutline class="w-5 h-5 text-white dark:text-white" />
          </div>
        </ListgroupItem>
      </a>
    {/each}
  </Listgroup>
</Card>
