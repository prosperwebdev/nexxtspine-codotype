<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ShoppingBagSolid, HomeSolid } from 'flowbite-svelte-icons';
  import { goto } from '$app/navigation';
  let { drawerClosed } = $props();

  function handleNavItemClicked(route) {
    drawerClosed();
  }
</script>

<Sidebar>
  <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
    <SidebarGroup>
      <SidebarItem
        href="/dashboard"
        label="Dashboard"
        onclick={() => {
          handleNavItemClicked();
        }}>
        <svelte:fragment slot="icon">
          <HomeSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem
        href="/products"
        label="Products"
        onclick={() => {
          handleNavItemClicked();
        }}>
        <svelte:fragment slot="icon">
          <ShoppingBagSolid
            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
