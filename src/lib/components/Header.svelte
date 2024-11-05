<script>
  import Sidebar from './Sidebar.svelte';
  import { Drawer, CloseButton, Button } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  import { PhoneSolid } from 'flowbite-svelte-icons';
  import NotificationBell from './NotificationBell.svelte';
  let drawerHidden = true;

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  const toggleDrawer = () => {
    drawerHidden = !drawerHidden;
  };
</script>

<header class="bg-primary-0 text-white p-6 flex items-center justify-between">
  <!-- drawer init and toggle -->
  <div class="flex flex-row gap-4 items-center">
    <button type="button" class="dark:text-white" on:click={() => (drawerHidden = false)}>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
      </svg>

      <span class="sr-only">Icon description</span>
    </button>
    <img src="/logo.png" class="mr-3 h-10 sm:h-9" alt="Flowbite Logo" />
  </div>
  <div class="flex flex-row items-center">
    <PhoneSolid class="w-8 h-8 text-white dark:text-white" />
    <NotificationBell />
  </div>
</header>

<Drawer transitionType="fly" {transitionParams} bind:hidden={drawerHidden} id="sidebar2">
  <div class="flex items-center">
    <CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white" />
  </div>
  <Sidebar drawerClosed={toggleDrawer} />
</Drawer>
