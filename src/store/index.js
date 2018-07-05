import Vue from 'vue';
import Vuex from 'vuex';
import db from '../assets/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    managers: []
  },
  mutations: {
    INIT_MANAGERS(state) {
      state.managers = db.managers;
    }
  },
  getters: {
    getManagers(state) {
      return state.managers;
    },
    getSelectedManager(state) {
      return (id) => {
        return state.managers.find(el => el.id === id)
      }
    }
  },
  actions: {
    initManagers({ commit }) {
      commit('INIT_MANAGERS');
    }
  }
});
