import Vue from 'vue';
import Vuex from 'vuex';

import {createPersistedState} from 'vuex-electron';

import modules from './modules';
import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,

  state: {
    user: {},
    chatListItems: [],
  },

  getters: {
    allUnreadChatMessageNumber: state => {
      const numProp = 'unreadNumber';
      return state.chatListItems.reduce((item1, item2) =>
        _.get(item1, numProp, 0) + _.get(item2, numProp, 0),
        0);
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAllUnreadChatMessageNumber(state, number) {
      state.allUnreadChatMessageNumber = number;
    },
    addChatListItem(state, item) {
      state.chatListItems.push(item);
    },
    insertChatListItem(state, {item, index}) {
      state.chatListItems.splice(index, 0, item);
    },
    removeChatListItem(state, index) {
      state.chatListItems.slice(index, 1);
    },
    clearChatListItems(state) {
      state.chatListItems = [];
    },
    setChatListItemUnreadNumber(state, {index, unreadNumber}) {
      let chatListItem = state.chatListItems[index];
      if (chatListItem) {
        chatListItem.unreadNumber = unreadNumber;
      }
    }
  },

  plugins: [
    createPersistedState(),
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
});
