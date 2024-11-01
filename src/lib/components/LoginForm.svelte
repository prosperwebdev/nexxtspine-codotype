<script lang="ts">
  import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import { derived } from 'svelte/store';

  let emailValue = $state('');
  let passwordValue = $state('');

  let isValid = $derived.by(() => {
    if (emailValue.length && passwordValue.length) {
      return true;
    } else {
      return false;
    }
  });

  function routeToPage() {
    goto(`/dashboard`);
  }
</script>

<Section name="login" sectionClass="w-full ms-6 me-6">
  <Register href="/">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div class="w-full flex justify-center mb-12">
        <img class="mr-3 h-16 sm:h-12" src="/logo.png" alt="logo" />
      </div>
      <div class="flex flex-col space-y-6">
        <Label class="space-y-2">
          <span>Your email</span>
          <Input type="text" name="email" bind:value={emailValue} required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="text" name="password" required bind:value={passwordValue} />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
        </div>
        <Button type="submit" class="w-full1" on:click={routeToPage} disabled={!isValid}>Sign in</Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
      </div>
    </div>
  </Register>
</Section>
