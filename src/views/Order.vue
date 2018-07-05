<template>
  <div class="order">
    <section class="manager mb-4">
      <h3 class="text-capitalize text-right">current manager is: <strong>{{ fullName }}</strong></h3>
    </section>
    <hr>
    <form @submit.prevent="onSubmit()">
      <div class="form-group">
        <label class="order__label" for="order_id">order id</label>
        <input v-model="order.id" type="number" class="form-control" id="order_id" name="order_id" placeholder="order id">
      </div>
      <div class="form-group">
        <label class="order__label" for="order_title">order title</label>
        <input v-model="order.title" type="text" class="form-control" id="order_title" name="order_title" placeholder="order title">
      </div>
      <div class="form-group">
        <label class="order__label" for="order_image">order image</label>
        <input v-model="order.image" type="text" class="form-control" id="order_image" name="order_image" placeholder="order image">
      </div>
      <div class="form-group">
        <label class="order__label" for="order_description">order description</label>
        <input v-model="order.description" type="text" class="form-control" id="order_description" name="order_description" placeholder="order description">
      </div>
      <div class="form-group">
        <label class="order__label" for="order_price">order price</label>
        <input v-model="order.price" type="number" class="form-control" id="order_price" name="order_price" placeholder="order price">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
      order: {
        id: null,
        title: null,
        image: null,
        description: null,
        price: null
      }
    }
  },
  methods: {
    onSubmit() {
      const newOrder = { ...this.order };
      this.$store.dispatch('addOrder', newOrder);
      for (let key in this.order) {
        this.order[key] = null;
      }
    }
  },
  computed: {
    manager() {
      return this.$store.getters.getCurrentManager;
    },
    fullName() {
      return `${this.manager.firstName} ${this.manager.lastName}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .order {
    //
    &__label {
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: .1rem;
      margin-left: .6rem;

      &:after {
        content: ':';
      }
    }
  }
</style>
