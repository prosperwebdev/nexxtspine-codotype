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
    screwSizes: {
      coming: 0,
      soon: 0
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
      <Table>
        <TableHead>
          <TableHeadCell>Size (mm)</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>24D x 32W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button
                pill={true}
                outline={false}
                size="sm"
                class="dark:bg-transparent"
                style="background-color: none;"
                on:click={() => {
                  alifQuantities.footprints.sm > 0 && alifQuantities.footprints.sm--;
                }}>
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.footprints.sm} class="flex-1 text-center" size="sm" />
              </Label>
              <Button
                size="sm"
                class="dark:hover-none bg-transparent dark:bg-transparent"
                style="background-color: none;"
                on:click={alifQuantities.footprints.sm++}>
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>27D x 36W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.footprints.md} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>30D x 40W</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.footprints.lg} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
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
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.heights.xs} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>12</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.heights.sm} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>14</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.heights.md} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>16</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.heights.lg} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>18</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.heights.xl} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>20</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label>
                <NumberInput bind:value={alifQuantities.heights.xxl} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent" style="background-color: none;">
                <PlusOutline class="w-4 h-4" />
              </Button>
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
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.lordoses.xs} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>14&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.lordoses.sm} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>20&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.lordoses.md} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>25&deg;</TableBodyCell>
            <TableBodyCell class={quantityContainerClass}>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <MinusOutline class="w-4 h-4" />
              </Button>
              <Label class="flex-grow-1">
                <NumberInput bind:value={alifQuantities.lordoses.lg} class="flex-1 text-center" size="sm" />
              </Label>
              <Button pill={true} outline={false} size="sm" class="dark:bg-transparent">
                <PlusOutline class="w-4 h-4" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
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
