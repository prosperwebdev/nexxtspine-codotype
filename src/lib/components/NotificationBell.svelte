<script>
  import { Button, Indicator, Modal } from 'flowbite-svelte';
  import { BellSolid } from 'flowbite-svelte-icons';
  import InstrumentSets from './InstrumentSets.svelte';
  let open = false;

  const toggleNotificationsDialog = () => {
    open = !open;
  };
</script>

<Button
  on:click={toggleNotificationsDialog}
  id="notifications-button"
  class="relative dark:focus-within:bg-transparent dark:focus-within:border-none dark:active:bg-transparent border-none"
  size="sm"
  pill={true}
  outline={true}
  color="dark">
  <BellSolid class="w-8 h-8 text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="red" size="xl" placement="top-right" class="text-xs font-bold  text-white ">2</Indicator>
</Button>

<Modal id="notifications-dialog" title="Notifications" bind:open placement="top-right" autoclose>
  <InstrumentSets />
</Modal>
