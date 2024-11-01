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
    TableHeadCell
  } from 'flowbite-svelte';
  import { PlusOutline, MinusOutline } from 'flowbite-svelte-icons';

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

{#snippet quantityModifier(subItemName, subItemSize)}
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
{/snippet}

<div class="flex justify-between items-center mb-4">
  <h5 class="text-md leading-none text-gray-900 dark:text-white">Customize</h5>
</div>
<div class="flex flex-col gap-16">
  <Accordion>
    <AccordionItem>
      <span slot="header">Footprints</span>
      <Table>
        <TableHead>
          <TableHeadCell>Size (mm)</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>24D x 32W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('footprints', 'sm')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>27D x 36W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('footprints', 'md')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>30D x 40W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('footprints', 'lg')}
            </TableBodyCell>
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
            <TableBodyCell>10</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'xs')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>12</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'sm')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>14</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'md')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>16</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'lg')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>18</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'xl')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>20</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('heights', 'xxl')}
            </TableBodyCell>
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
            <TableBodyCell>8&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('lordoses', 'xs')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>14&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('lordoses', 'sm')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>20&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('lordoses', 'md')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>25&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('lordoses', 'lg')}
            </TableBodyCell>
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
            <TableBodyCell>45° Cephalad</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwAngulations', 'cephaladCaudal')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>10° Medial</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwAngulations', 'medial')}
            </TableBodyCell>
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
            <TableBodyCell>20mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeSmall', 'xs')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>25mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeSmall', 'sm')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>30mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeSmall', 'md')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>35mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeSmall', 'lg')}
            </TableBodyCell>
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
            <TableBodyCell>20mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeMedium', 'xs')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>25mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeMedium', 'sm')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>30mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeMedium', 'md')}
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>35mm</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              {@render quantityModifier('screwSizeMedium', 'lg')}
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
  </Accordion>

  <div class="w-full flex justify-center align-middle">
    <Button class="w-full">Place order</Button>
  </div>
</div>
