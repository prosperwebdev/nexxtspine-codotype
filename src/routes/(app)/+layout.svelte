<script>
  import '../../app.css';
  import Header from '$lib/components/Header.svelte';
  let { children } = $props();

  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  const order = writable([
    {
      name: 'Footprints',
      variations: [
        { name: '24D x 32W', quantity: 0 },
        { name: '27D x 36W', quantity: 0 },
        { name: '30D x 40W', quantity: 0 }
      ],
      fieldType: 'quantity'
    },
    {
      name: 'Heights',
      variations: [
        { name: '10mm', quantity: 0 },
        { name: '12mm', quantity: 0 },
        { name: '14mm', quantity: 0 },
        { name: '16mm', quantity: 0 },
        { name: '18mm', quantity: 0 },
        { name: '20mm', quantity: 0 }
      ],
      fieldType: 'quantity'
    },
    {
      name: 'Lordoses',
      variations: [
        { name: '8mm', quantity: 0 },
        { name: '14mm', quantity: 0 },
        { name: '20mm', quantity: 0 },
        { name: '25mm', quantity: 0 }
      ],
      fieldType: 'quantity'
    },
    {
      name: 'Screw Type',
      selectedValue: null,
      variations: [
        { name: 'Self Tapping', value: 'st' },
        { name: 'Self Drilling', value: 'sd' },
        { name: 'Acute', value: 'ac' }
      ],
      fieldType: 'radio'
    },
    {
      name: 'Ø5.0 Diameter Screws',
      variations: [
        { name: '20mm', quantity: 0 },
        { name: '25mm', quantity: 0 },
        { name: '30mm', quantity: 0 },
        { name: '35mm', quantity: 0 }
      ],
      fieldType: 'quantity'
    },
    {
      name: 'Ø5.5 Diameter Screws',
      variations: [
        { name: '20mm', quantity: 0 },
        { name: '25mm', quantity: 0 },
        { name: '30mm', quantity: 0 },
        { name: '35mm', quantity: 0 }
      ],
      fieldType: 'quantity'
    }
  ]);

  const surgeryInfo = writable({
    name: 'surgeon name',
    date: 'surgery date',
    hospital: 'hospital name'
  });

  const buttonText = writable('Next');
  const currentStep = writable(1);
  const stepperUrl = writable('./sa-alif/customize');

  setContext('currentStep', currentStep);
  setContext('buttonText', buttonText);
  setContext('stepperUrl', stepperUrl);
  setContext('order', order);
  setContext('surgeryInfo', surgeryInfo);
</script>

<main class="container">
  <Header />
  <div class="body">
    {@render children()}
  </div>
</main>

<style>
  :global(body) {
    height: 100dvh;
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100dvh;
  }

  .body {
    overflow: auto;
    height: 100%;
  }
</style>
