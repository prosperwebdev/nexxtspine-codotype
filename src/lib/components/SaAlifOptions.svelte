<script>
  import {
    AccordionItem,
    Accordion,
    NumberInput,
    Label,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';

  let alif = $state({
    footprints: {
      small: 0,
      medium: 0,
      large: 0
    }
  });
</script>

<div class="flex justify-between items-center mb-4">
  <h5 class="text-md leading-none text-gray-900 dark:text-white">Customize</h5>
</div>
<div class="flex flex-col gap-16">
  <Accordion>
    <AccordionItem>
      <span slot="header">Footprints</span>
      <!-- <div class="flex flex-col gap-4">
        <Label class="grid grid-cols-[auto_96px] align-middle gap-4">
          <span class="self-center">24D x 32W</span>
          <NumberInput bind:value={alif.footprints.small} class="flex-1" size="sm" />
        </Label>
        <Label class="grid grid-cols-[auto_96px] align-middle gap-4">
          <span class="self-center">27D x 36W</span>
          <NumberInput bind:value={alif.footprints.medium} class="flex-1" size="sm" />
        </Label>
        <Label class="grid grid-cols-[auto_96px] align-middle gap-4">
          <span class="self-center">30D x 40W</span>
          <NumberInput bind:value={alif.footprints.large} class="flex-1" size="sm" />
        </Label>
      </div> -->
      <Table>
        <TableHead>
          <TableHeadCell>Size (mm)</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>24D x 32W</TableBodyCell>
            <TableBodyCell>
              <Label>
                <NumberInput bind:value={alif.footprints.small} class="flex-1" size="sm" />
              </Label>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>27D x 36W</TableBodyCell>
            <TableBodyCell>
              <Label>
                <NumberInput bind:value={alif.footprints.small} class="flex-1" size="sm" />
              </Label>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>30D x 40W</TableBodyCell>
            <TableBodyCell>
              <Label>
                <NumberInput bind:value={alif.footprints.small} class="flex-1" size="sm" />
              </Label>
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Heights</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Lordoses</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Screw Angulations</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Screw Sizes</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>

  <div class="w-full flex justify-center align-middle">
    <Button class="w-full">Place order</Button>
  </div>
</div>
