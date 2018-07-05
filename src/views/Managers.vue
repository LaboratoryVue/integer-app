<template>
  <div class="managers row">
    <div class="col-xs-12 col-md-4">
      <div class="list-group">
        <router-link
          v-for="manager in managers"
          :key="manager.id"
          :to="`/managers/${manager.id}`"
          class="list-group-item list-group-item-action managers__item">
            <span class="text-capitalize">{{ manager.firstName }} {{ manager.lastName }}</span>
          <span class="badge badge-info badge-pill">{{ manager.orders.length }}</span>
        </router-link>
      </div>
    </div>
    <div class="col-xs-12 col-md-8">
      <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'managers',
  computed: {
    managers() {
      return this.$store.getters.getManagers;
    }
  }
};
</script>

<style lang="scss" scoped>
.managers {
  //
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item:not(:last-child) {
    margin-bottom: 0.2rem;
  }
}
</style>
