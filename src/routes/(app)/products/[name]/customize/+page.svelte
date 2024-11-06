<script>
  import SaAlifOptions from '$lib/components/SaAlifOptions.svelte';
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getContext, onMount } from 'svelte';
  let currentStep = getContext('currentStep');
  let buttonText = getContext('buttonText');
  let stepperUrl = getContext('stepperUrl');

  onMount(() => {
    $currentStep = 2;
    $buttonText = 'Place Order';
    $stepperUrl = '/order-summary';
  });
</script>

<Toolbar title="Stand Alone Alif" />

<div class="p-6">
  <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
    <img
      class="w-full object-contain max-h-48"
      src="https://nexxtspine.com/wp-content/uploads/2022/01/SA-ALIF-Image-NO-Shadow-e1642776756555.png"
      alt="" />
  </div>

  <div class="mt-6 sm:mt-8 lg:mt-0">
    <SaAlifOptions />
  </div>
</div>
