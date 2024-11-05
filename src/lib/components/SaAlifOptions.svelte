<script>
  import {
    AccordionItem,
    Accordion,
    NumberInput,
    Label,
    Button,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Card,
    Radio
  } from 'flowbite-svelte';
  import { PlusOutline, MinusOutline, CheckCircleOutline } from 'flowbite-svelte-icons';
  import { Checkbox } from 'flowbite-svelte';

  let quantityContainerClass = 'grid grid-cols-[auto_1fr_auto] gap-3 items-center px-3';

  import { getContext } from 'svelte';
  const quantities = getContext('order');

  const onScrewTypeSelected = (e, itemIndex) => {
    $quantities[itemIndex].selectedValue = e.target.value;
  };
</script>

{#snippet itemDetailRow(rowDetailName, itemIndex, variationIndex)}
  <TableBodyCell>{rowDetailName}</TableBodyCell>
  <TableBodyCell class={quantityContainerClass}>
    <Button
      class="h-8 w-8"
      color="alternative"
      pill={true}
      outline={false}
      size="xs"
      onclick={() => {
        if ($quantities[itemIndex].variations[variationIndex].quantity > 0) {
          $quantities[itemIndex].variations[variationIndex].quantity--;
        }
      }}>
      <MinusOutline class="w-4 h-4" />
    </Button>
    <Label class="flex-grow-1">
      <NumberInput bind:value={$quantities[itemIndex].variations[variationIndex].quantity} class="flex-1 text-center" size="sm" />
    </Label>
    <Button
      class="h-8 w-8"
      size="xs"
      color="alternative"
      onclick={() => {
        $quantities[itemIndex].variations[variationIndex].quantity++;
      }}>
      <PlusOutline class="w-4 h-4" />
    </Button>
  </TableBodyCell>
{/snippet}

<div class="flex flex-col gap-6">
  <h3 class="text-md leading-none text-gray-900 dark:text-white">Customize</h3>
  <Accordion activeClass="bg-primary-0 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-600">
    {#each $quantities as $item, itemIndex}
      <AccordionItem>
        <span slot="header">{$item.name}</span>
        {#if $item.fieldType === 'quantity'}
          <Table>
            <TableHead>
              <TableHeadCell>Size</TableHeadCell>
              <TableHeadCell>Quantity</TableHeadCell>
            </TableHead>
            <TableBody tableBodyClass="divide-y">
              {#each $item.variations as $variation, variationIndex}
                <TableBodyRow>
                  {@render itemDetailRow($variation.name, itemIndex, variationIndex)}
                </TableBodyRow>
              {/each}
            </TableBody>
          </Table>
        {/if}

        {#if $item.fieldType === 'radio'}
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
            {#each $item.variations as $variation, variationIndex}
              <Radio
                value={$quantities[itemIndex].variations[variationIndex].value}
                name="custom"
                custom
                on:click={(e) => {
                  onScrewTypeSelected(e, itemIndex);
                }}>
                <div
                  for="hosting-big"
                  class="inline-flex justify-start items-center gap-3 py-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <CheckCircleOutline class="ms-3 w-5 h-5" />
                  <div class="block">
                    <div class="w-full text-sm">{$variation.name}</div>
                  </div>
                </div>
              </Radio>
            {/each}
          </div>
        {/if}
      </AccordionItem>
    {/each}
  </Accordion>

  <hr class="my-4 md:my-8 border-gray-200 dark:border-gray-800" />

  <h3 class="text-md leading-none text-gray-900 dark:text-white">Additional options</h3>
  <Card class="flex flex-col gap-6 p-6 w-full">
    <Checkbox>Talk with customer support?</Checkbox>
    <Checkbox>Save this configuration for future orders</Checkbox>
  </Card>
</div>
