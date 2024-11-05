<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import RecentOrders from '../../../lib/components/RecentOrders.svelte';
</script>

<div class="p-3">
  <Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/dashboard" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Recent orders</BreadcrumbItem>
  </Breadcrumb>
</div>
<div class="p-6">
  <RecentOrders />
</div>
