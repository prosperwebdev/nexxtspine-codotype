<script>
  import { Select, Datepicker, Label, Card } from 'flowbite-svelte';
  import surgeonData from '$lib/surgeonData.json';
  import Toolbar from '../../../../lib/components/Toolbar.svelte';
  let list = surgeonData;

  let selectedSurgeon = '';
  let selectedHospital = '';
  let selectedSurgeryDate = '';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'de', name: 'Germany' },
    { value: 'fr', name: 'France', disabled: true }
  ];
</script>

<Toolbar title="Stand Alone Alif" />

<div class="p-6 items-center gap-4">
  <img
    class="w-full max-h-24 object-contain"
    src="https://nexxtspine.com/wp-content/uploads/2022/01/SA-ALIF-Image-NO-Shadow-e1642776756555.png"
    alt="" />
</div>

<div class="p-6">
  <h1 class="text-sm text-gray-900 dark:text-white">Step 1: Surgery Information</h1>
  <Card class="mt-4 h-fit w-full min-w-full">
    <div class="flex flex-col gap-8 p-4">
      <Label>
        Select a surgeon
        <Select class="mt-2" items={list} bind:value={selectedSurgeon} />
      </Label>

      <Label>
        Select a hospital
        <Select class="mt-2" items={countries} bind:value={selectedHospital} />
      </Label>

      <Label>
        <div class="mb-2">Surgery date</div>
        <Datepicker class="mt-2" bind:value={selectedSurgeryDate} />
      </Label>
    </div>
  </Card>
</div>
