<template>
  <tr class="order">
    <td>{{ order.id }}</td>
    <td>{{ order.title }}</td>
    <td>${{ order.price }}</td>
    <td>{{ order.description }}</td>
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
    }
  }
</script>

<style lang="scss" scoped>
  .order {
    //
  }
</style>
