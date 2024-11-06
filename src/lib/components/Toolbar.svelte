<script>
  import { Toolbar, ToolbarButton, Card, Modal, Avatar, Button } from 'flowbite-svelte';
  import { DotsVerticalOutline, FileDocOutline, NewspaperOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';
  export let title;
  let modalOpen = false;
</script>

<Toolbar>
  <div class="flex flex-row gap-4 items-center">
    <h1 class="text-sm text-gray-900 sm:text-2xl dark:text-white flex-0">{title}</h1>
  </div>
  <ToolbarButton slot="end" on:click={() => (modalOpen = true)}><DotsVerticalOutline class="w-6 h-6" /></ToolbarButton>
  <Modal title="Stand Alone Alif Downloads" bind:open={modalOpen} autoclose>
    <div class="grid grid-cols-1 gap-4">
      <Card padding="sm" class="w-full min-w-full">
        <div class="flex flex-col items-center gap-3">
          <Avatar size="lg"><FileDocOutline class="w-12 h-12" /></Avatar>
          <span class="text-sm text-gray-500 dark:text-gray-400">STF</span>
          <div class="flex space-x-3 rtl:space-x-reverse lg:mt-6">
            <Button color="light" class="dark:text-white">Download</Button>
          </div>
        </div>
      </Card>
      <Card padding="sm" class="w-full min-w-full">
        <div class="flex flex-col items-center gap-3">
          <Avatar size="lg"><NewspaperOutline class="w-12 h-12" /></Avatar>
          <span class="text-sm text-gray-500 dark:text-gray-400">Brochure</span>
          <div class="flex space-x-3 rtl:space-x-reverse lg:mt-6">
            <Button color="light" class="dark:text-white">Download</Button>
          </div>
        </div>
      </Card>
      <Card padding="sm" class="w-full min-w-full">
        <div class="flex flex-col items-center gap-3">
          <Avatar size="lg"><ExclamationCircleOutline class="w-12 h-12" /></Avatar>
          <span class="text-sm text-gray-500 dark:text-gray-400">IFU</span>
          <div class="flex space-x-3 rtl:space-x-reverse lg:mt-6">
            <Button color="light" class="dark:text-white">Download</Button>
          </div>
        </div>
      </Card>
    </div>
  </Modal>
</Toolbar>
