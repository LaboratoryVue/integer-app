<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <navigation />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/TheNavigation';
export default {
  name: 'app',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
