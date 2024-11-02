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
    Card
  } from 'flowbite-svelte';
  import { PlusOutline, MinusOutline } from 'flowbite-svelte-icons';
  import { Checkbox } from 'flowbite-svelte';

  let quantityContainerClass = 'grid grid-cols-[auto_1fr_auto] ps-0 pe-0 gap-0';

  let alifQuantities = $state({
    footprints: {
      sm: 0,
      md: 0,
      lg: 0
    },
    heights: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 0,
      xxl: 0
    },
    lordoses: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0
    },
    screwAngulations: {
      cephaladCaudal: 0,
      Medial: 0
    },
    screwSizeSmall: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0
    },
    screwSizeMedium: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0
    }
  });
</script>

{#snippet itemDetailRow(rowDetailName, subItemName, subItemSize)}
  <TableBodyCell>{rowDetailName}</TableBodyCell>
  <TableBodyCell class={quantityContainerClass}>
    <Button
      pill={true}
      outline={false}
      size="sm"
      class="dark:bg-transparent"
      style="background-color: none;"
      on:click={() => {
        alifQuantities[subItemName][subItemSize] > 0 && alifQuantities[subItemName][subItemSize]--;
      }}>
      <MinusOutline class="w-4 h-4" />
    </Button>
    <Label class="flex-grow-1">
      <NumberInput bind:value={alifQuantities[subItemName][subItemSize]} class="flex-1 text-center" size="sm" />
    </Label>
    <Button
      size="sm"
      class="dark:hover-none bg-transparent dark:bg-transparent"
      style="background-color: none;"
      on:click={() => {
        alifQuantities[subItemName][subItemSize]++;
      }}>
      <PlusOutline class="w-4 h-4" />
    </Button>
  </TableBodyCell>
{/snippet}

<div class="flex flex-col gap-6">
  <h3 class="text-md leading-none text-gray-900 dark:text-white">Customize</h3>
  <Accordion activeClass="bg-primary-0 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-600">
    <AccordionItem>
      <span slot="header">Footprints</span>
      <Table>
        <TableHead>
          <TableHeadCell>Size (mm)</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('24D x 32W', 'footprints', 'sm')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('27D x 36W', 'footprints', 'md')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('30D x 40W', 'footprints', 'lg')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Heights</span>
      <Table>
        <TableHead>
          <TableHeadCell>Size (mm)</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('10', 'heights', 'xs')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('12', 'heights', 'sm')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('14', 'heights', 'md')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('16', 'heights', 'lg')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('18', 'heights', 'xl')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('20', 'heights', 'xxl')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Lordoses</span>
      <Table>
        <TableHead>
          <TableHeadCell>Degrees</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('8\u00B0', 'lordoses', 'xs')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('14\u00B0', 'lordoses', 'sm')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('20\u00B0', 'lordoses', 'md')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('25\u00B0', 'lordoses', 'lg')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Screw Angulations</span>
      <Table>
        <TableHead>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('45° Cephalad', 'screwAngulations', 'cephaladCaudal')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('10° Medial', 'screwAngulations', 'medial')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Ø5.0 Diameter Screws</span>
      <Table>
        <TableHead>
          <TableHeadCell>Length</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('20mm', 'screwSizeSmall', 'xs')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('25mm', 'screwSizeSmall', 'sm')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('30mm', 'screwSizeSmall', 'md')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('35mm', 'screwSizeSmall', 'lg')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Ø5.5 Diameter Screws</span>
      <Table>
        <TableHead>
          <TableHeadCell>Length</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            {@render itemDetailRow('20mm', 'screwSizeMedium', 'xs')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('25mm', 'screwSizeMedium', 'sm')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('30mm', 'screwSizeMedium', 'md')}
          </TableBodyRow>
          <TableBodyRow>
            {@render itemDetailRow('35mm', 'screwSizeMedium', 'lg')}
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
  </Accordion>

  <hr class="my-4 md:my-8 border-gray-200 dark:border-gray-800" />

  <h3 class="text-md leading-none text-gray-900 dark:text-white">Additional options</h3>
  <Card class="flex flex-col gap-6 p-6">
    <Checkbox>Talk with customer support?</Checkbox>
    <Checkbox>Save this configuration for future orders</Checkbox>
  </Card>
  <Button class="w-full">Place order</Button>
</div>
