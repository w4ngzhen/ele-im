const state = {
  loginUser: {}
};

const mutations = {
  setLoginUser(state, loginUser) {
    state.loginUser = loginUser;
  },
};

export default {
  state,
  mutations
};
