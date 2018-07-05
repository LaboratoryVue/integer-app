<template>
  <div class="orders">
    <orders-table />
  </div>
</template>

<script>
import OrdersTable from '@/components/TheOrdersTable';
export default {
  name: 'orders',
  components: {
    OrdersTable
  }
};
</script>
