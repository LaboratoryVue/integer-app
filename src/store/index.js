import Vue from 'vue';
import Vuex from 'vuex';
import db from '../assets/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    managers: [],
    orders: [],
    flags: [true, true, true, true]
  },
  mutations: {
    INIT_MANAGERS(state) {
      state.managers = db.managers;
    },
    INIT_ORDERS(state) {
      state.orders = db.orders;
    },
    REMOVE_ORDER(state, payload) {
      // => filter orders table
      state.orders = state.orders.filter(el => el.id !== payload);
      // => filter orders in managers
      state.managers.forEach(manager => {
        manager.orders = manager.orders.filter(order => order.id !== payload)
      });
    },
    SORT_ORDERS(state, payload) {
      if (payload === 'id') {
        if (state.flags[0]) {
          state.orders.sort((a, b) => (Number(b.id) - Number(a.id)));
        } else {
          state.orders.sort((a, b) => (Number(a.id) - Number(b.id)));
        }
        state.flags[0] = !state.flags[0];
      }
      if (payload === 'title') {
        if (state.flags[1]) {
          state.orders.sort((a, b) => (String(b.title) > String(a.title)));
        } else {
          state.orders.sort((a, b) => (String(a.title) > String(b.title)));
        }
        state.flags[1] = !state.flags[1];
      }
      if (payload === 'price') {
        if (state.flags[2]) {
          state.orders.sort((a, b) => (Number(b.price) - Number(a.price)));
        } else {
          state.orders.sort((a, b) => (Number(a.price) - Number(b.price)));
        }
        state.flags[2] = !state.flags[2];
      }
      if (payload === 'description') {
        if (state.flags[3]) {
          state.orders.sort((a, b) => (String(b.description) > String(a.description)));
        } else {
          state.orders.sort((a, b) => (String(a.description) > String(b.description)));
        }
        state.flags[3] = !state.flags[3];
      }
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
    },
    editOrder({ commit }, payload) {
      commit('REMOVE_ORDER', payload);
    },
    sortOrders({ commit }, payload) {
      commit('SORT_ORDERS', payload);
    }
  }
});
