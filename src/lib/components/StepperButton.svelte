<script>
  import { Indicator } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  let buttonText = getContext('buttonText');
  let currentStep = getContext('currentStep');
  let stepperUrl = getContext('stepperUrl');
</script>

<div class="py-4">
  {#if $currentStep === 1}
    <div class="flex flex-row items-center w-full justify-center gap-8">
      <Indicator color="red" />
      <Indicator color="gray" />
      <Indicator color="gray" />
    </div>
  {/if}
  {#if $currentStep === 2}
    <div class="flex flex-row items-center w-full justify-center gap-8">
      <Indicator color="red" />
      <Indicator color="red" />
      <Indicator color="gray" />
    </div>
  {/if}
  {#if $currentStep === 3}
    <div class="flex flex-row items-center w-full justify-center gap-8">
      <Indicator color="red" />
      <Indicator color="red" />
      <Indicator color="red" />
    </div>
  {/if}
  <div class="flex flex-col gap-4 px-4 mt-4">
    <a href={$stepperUrl} class="bg-primary-0 p-2 rounded-lg flex flex-row content-center justify-center" on:click={$currentStep++}>{$buttonText}</a>
  </div>
</div>
