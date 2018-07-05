<template>
  <tr class="order">
    <td>{{ order.id }}</td>
    <td>{{ order.title }}</td>
    <td>${{ order.price }}</td>
    <td>{{ order.description }}</td>
    <td><button @click="onEdit(order.id)" type="button" class="btn btn-danger btn-sm order__edit">remove</button></td>
  </tr>
</template>

<script>
  export default {
    name: 'OrdersTableItem',
    props: {
      order: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      onEdit(value) {
        // console.log(`${value}`);
        this.$store.dispatch('editOrder', value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order {
    //
    &__edit {
      cursor: pointer;
    }
  }
</style>
