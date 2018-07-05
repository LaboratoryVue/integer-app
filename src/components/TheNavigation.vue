<template>
  <div id="nav">
    <router-link to="/">home</router-link> |
    <router-link to="/managers">managers</router-link> |
    <router-link to="/orders">orders</router-link> |
    <router-link to="/order">make order</router-link>
  </div>
</template>

<script>
export default {
  name: 'TheNavigation'
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  & > a {
    font-weight: 700;
    color: #2c3e50;
    text-transform: capitalize;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
