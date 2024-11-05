<script>
  import { Select, Datepicker, Label, Card } from 'flowbite-svelte';
  import surgeonData from '$lib/surgeonData.json';
  import hospitalData from '$lib/hospitalData.json';
  import Toolbar from '../../../../lib/components/Toolbar.svelte';
  import { getContext } from 'svelte';
  let surgeryInfo = getContext('surgeryInfo');

  let surgeons = surgeonData;
  let hospitals = hospitalData;

  function handleDateSelect(event) {
    let date = event.detail;
    $surgeryInfo.date = date;
  }
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
        <Select class="mt-2" items={surgeons} bind:value={$surgeryInfo.name} />
      </Label>

      <Label>
        Select a hospital
        <Select class="mt-2" items={hospitals} bind:value={$surgeryInfo.hospital} />
      </Label>

      <div>
        <div class="mb-2">Surgery date</div>
        <Datepicker inline class="mt-2" on:select={handleDateSelect} />
      </div>
    </div>
  </Card>
</div>
