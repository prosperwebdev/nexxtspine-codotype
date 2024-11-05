<script>
  import { ArrowLeftOutline } from 'flowbite-svelte-icons';
  export let title;
</script>

<div class="h-12 bg-slate-800 p-3">
  <div class="flex flex-row gap-4 items-center">
    <ArrowLeftOutline class="w-7 h-7 text-white" />
    <h1 class="text-sm text-gray-900 sm:text-2xl dark:text-white flex-0">{title}</h1>
  </div>
</div>
