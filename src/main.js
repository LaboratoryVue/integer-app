import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css/animate.css';

Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('initData');
  },
  render: h => h(App)
}).$mount('#app');
