import _ from "lodash";

const state = {
  recentChatList: []
};

const getters = {
  allUnreadChatMessageNumber: state => {
    const numProp = 'unreadNumber';
    return state.recentChatList.reduce((item1, item2) =>
      _.get(item1, numProp, 0) + _.get(item2, numProp, 0),
      0);
  }
};

const mutations = {
  addRecentChat(state, recentChat) {
    state.recentChatList.push(recentChat);
  },
  insertRecentChat(state, {recentChat, index}) {
    state.recentChatList.splice(index, 0, recentChat);
  },
  removeRecentChat(state, index) {
    state.recentChatList.slice(index, 1);
  },
  clearRecentChatList(state) {
    state.recentChatList = [];
  },
  setRecentChatUnreadNumber(state, {unreadNumber, index}) {
    let chatListItem = state.recentChatList[index];
    if (chatListItem) {
      chatListItem.unreadNumber = unreadNumber;
    }
  }
};

export default {
  state,
  mutations,
  getters
};
