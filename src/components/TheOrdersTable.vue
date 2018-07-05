<template>
  <table class="table table-striped">
    <thead>
      <tr class="caption">
        <th class="caption__item" scope="col">id</th>
        <th class="caption__item" scope="col">title</th>
        <th class="caption__item" scope="col">price</th>
        <th class="caption__item" scope="col">description</th>
      </tr>
    </thead>
    <tbody>
      <OrdersTableItem v-for="order in orders" :key="order.id" :order="order" />
    </tbody>
  </table>
</template>

<script>
  import OrdersTableItem from '@/components/OrdersTableItem';
  export default {
    name: 'TheOrderTable',
    components: {
      OrdersTableItem
    },
    computed: {
      orders() {
        return this.$store.getters.getAllOrders;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .caption {
    //
    &__item {
      text-transform: uppercase;
      font-size: .96rem;
      cursor: pointer;
      color: forestgreen;
      transition: color .2s;

      &:hover {
        color: darkgreen;
      }
    }
  }
</style>
