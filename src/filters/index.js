import addDollarSign from './addDollarSign.js';

export default {
  install(Vue) {
    Vue.filter('dollar', addDollarSign);
  }
}
