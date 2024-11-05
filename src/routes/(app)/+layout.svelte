<script>
  import '../../app.css';
  import Header from '$lib/components/Header.svelte';
  let { children } = $props();

  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import FooterNexxt from '../../lib/components/FooterNexxt.svelte';

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
        { name: '10', quantity: 0 },
        { name: '12', quantity: 0 },
        { name: '14', quantity: 0 },
        { name: '16', quantity: 0 },
        { name: '18', quantity: 0 },
        { name: '20', quantity: 0 }
      ],
      fieldType: 'quantity'
    },
    {
      name: 'Lordoses',
      variations: [
        { name: '8', quantity: 0 },
        { name: '14', quantity: 0 },
        { name: '20', quantity: 0 },
        { name: '25', quantity: 0 }
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

  const surgeryInfo = writable([
    {
      surgeonName: null,
      surgeryDate: null,
      hospitalName: null
    }
  ]);

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
