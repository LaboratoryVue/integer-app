import Vue from 'vue';
import Vuex from 'vuex';
import db from '../assets/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    managers: [],
    orders: []
  },
  mutations: {
    INIT_MANAGERS(state) {
      state.managers = db.managers;
    },
    INIT_ORDERS(state) {
      state.orders = db.orders;
    }
  },
  getters: {
    getManagers(state) {
      return state.managers;
    },
    getSelectedManager(state) {
      return (id) => {
        return state.managers.find(el => el.id === id);
      }
    },
    getAllOrders(state) {
      return state.orders;
    }
  },
  actions: {
    initData({ commit }) {
      commit('INIT_MANAGERS');
      commit('INIT_ORDERS');
    }
  }
});
