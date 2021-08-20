const getters = {
  getSelectedInboxItem() {
    return 1;
  },
  getInboxItems(state, getters, rootState, rootGetters) {
    return [
      {
        selected: true,
        id: 1,
        senderIcon: "test senderIcon",
        senderName: "test senderName",
        dayRead: undefined,
        teaserText: "test teaserText",
      },
      {
        selected: false,
        id: 2,
        senderIcon: "test senderIcon 2",
        senderName: "test senderName 2",
        dayRead: undefined,
        teaserText: "test teaserText 2",
      },
    ];
  },
  isLoaded(state, getters, rootState) {
    return true;
  },
};

const actions = {
  closeInboxItem: jest.fn(),
  selectDefaultInboxItem: jest.fn(),
  selectInboxItem: jest.fn(),
};

export default {
  namespaced: true,
  getters,
  actions,
};
