import Vue from 'vue';
import Vuex from 'vuex';

import {createPersistedState} from 'vuex-electron';

import userState from './modules/user-state';
import recentChatListState from './modules/recent-chat-list-state';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    userState,
    recentChatListState
  },

  state: {},

  getters: {},

  mutations: {},

  plugins: [
    createPersistedState(),
    // createSharedMutations()
  ],

  strict: process.env.NODE_ENV !== 'production'
});
