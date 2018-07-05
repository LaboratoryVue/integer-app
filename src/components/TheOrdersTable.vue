<template>
  <table class="table table-striped">
    <thead>
      <tr class="caption">
        <th @click="onSort(`id`)" class="caption__item caption__item--sortable" scope="col">id</th>
        <th @click="onSort(`title`)" class="caption__item caption__item--sortable" scope="col">title</th>
        <th @click="onSort(`price`)" class="caption__item caption__item--sortable" scope="col">price</th>
        <th @click="onSort(`description`)" class="caption__item caption__item--sortable" scope="col">description</th>
        <th class="caption__item" scope="col">edit</th>
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
    },
    methods: {
      onSort(value) {
        this.$store.dispatch('sortOrders', value)
      }
    }
  };
</script>

<style lang="scss" scoped>
  .caption {
    //
    &__item {
      text-transform: uppercase;
      text-align: center;
      font-size: .96rem;

      &--sortable {
        transition: color .2s;
        cursor: pointer;
        color: forestgreen;

        &:hover {
          color: darkgreen;
        }
      }

    }
  }
</style>
