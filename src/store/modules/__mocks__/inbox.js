const getters = {
  getSelectedInboxItem() {
    return 1;
  },
  getInboxItems(state, getters, rootState, rootGetters) {
    return [];
  },
  isLoaded(state, getters, rootState) {
    return true;
  },
};

const actions = {
  closeInboxItem: jest.fn(),
  selectDefaultInboxItem: jest.fn(),
};

export default {
  namespaced: true,
  getters,
  actions,
};
