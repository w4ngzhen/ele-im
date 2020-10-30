import Vue from 'vue';
import Vuex from 'vuex';

import {createPersistedState} from 'vuex-electron';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,

  state: {
    user: {},
    allUnreadChatMessageNumber: 0
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAllUnreadChatMessageNumber(state, number) {
      state.allUnreadChatMessageNumber = number;
    }
  },

  plugins: [
    createPersistedState(),
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
});
