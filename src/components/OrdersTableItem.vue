<template>
  <tr class="order">
    <td class="order__item">{{ order.id }}</td>
    <td class="order__item">{{ order.title }}</td>
    <td class="order__item">${{ order.price }}</td>
    <td class="order__item">{{ order.description }}</td>
    <td class="order__item"><button @click="onEdit(order.id)" type="button" class="btn btn-danger btn-sm order__edit">remove</button></td>
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
      this.$store.dispatch('editOrder', value);
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  //
  &__item {
    text-align: center;
  }
  &__edit {
    cursor: pointer;
  }
}
</style>
