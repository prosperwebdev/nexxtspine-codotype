<script>
  import { Card, Listgroup, Avatar, Badge } from 'flowbite-svelte';
  let list = [
    {
      img: { src: 'https://placehold.co/150x150', alt: 'Neil Sims' },
      name: 'Set name',
      email: '11/23/2024',
      value: '$320',
      due: true
    },
    {
      img: { src: 'https://placehold.co/150x150', alt: 'Bonnie Green' },
      name: 'Set name',
      email: '11/23/2024',
      value: '$3467',
      due: true
    }
  ];
</script>

<Card padding="xl" size="none">
  <Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {item.name}
        </p>
        <p class="text-xs text-gray-500 truncate dark:text-gray-400">
          {item.email}
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-2">
        {#if item.due}
          <Badge color="red">Due this week</Badge>
        {/if}
      </div>
    </div>
  </Listgroup>
</Card>
