<template>
  <div class="card manager">
    <img class="card-img-top" :src="manager.photo" :alt="manager.firstName">
    <div class="card-body">
      <h5 class="card-title text-capitalize manager__title">{{ managerFullName }}</h5>
      <ul class="list-group">
        <li class="list-group-item">
          <span class="manager__detail">id:</span><span>{{ manager.id }}</span>
        </li>
        <li class="list-group-item">
          <span class="manager__detail">email:</span><span>{{ manager.email }}</span>
        </li>
        <li class="list-group-item">
          <span class="manager__detail">phone:</span><span>{{ manager.phone }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheManagerDetail',
  computed: {
    id() {
      return this.$route.params.id;
    },
    manager() {
      return this.$store.getters.getSelectedManager(this.id);
    },
    managerFullName() {
      return `${this.manager.firstName} ${this.manager.lastName}`
    }
  }
};
</script>

<style lang="scss" scoped>
  .manager {
    //
    &__title {
      font-weight: 700;
    }
    &__detail {
      text-transform: uppercase;
      font-weight: 700;
      margin-right: .2rem;
      font-size: 1rem;
    }
  }
</style>
