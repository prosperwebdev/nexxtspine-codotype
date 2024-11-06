<script>
  import { Listgroup, ListgroupItem, Card } from 'flowbite-svelte';
  export let orders;
</script>

<table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
  <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
    {#each orders as item}
      <tr>
        <td class="whitespace-nowrap py-4 flex flex-col gap-3">
          <div class="flex items-center gap-4">
            <span class="text-sm">{item.name}</span>
          </div>

          {#if item.fieldType === 'radio'}
            <Card>
              {#if item.selectedValue === 'ac'}Acute{/if}
              {#if item.selectedValue === 'st'}Self Tapping{/if}
              {#if item.selectedValue === 'sd'}Self Drilling{/if}
            </Card>
          {/if}
          {#if item.fieldType === 'quantity'}
            <Listgroup class="w-full">
              {#each item.variations as variation}
                {#if variation.quantity > 0}
                  <ListgroupItem class="text-base font-semibold gap-2">
                    <div class="w-full flex flex-row justify-between">
                      <span class="text-sm">{variation.name}</span>
                      <span class="text-sm">{variation.quantity}</span>
                    </div>
                  </ListgroupItem>
                {/if}
              {/each}
            </Listgroup>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
