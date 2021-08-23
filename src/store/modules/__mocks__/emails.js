const state = {
  loaded: true,
};

const getters = {
  getMailObject(state) {
    return [
      {
        emails: [
          {
            id: 1,
            messageTitle: "test title",
            messageBody: "test body",
            receivedTime: Date.now(),
          },
          {
            id: 2,
            messageTitle: "test title 2",
            messageBody: "test body 2",
            receivedTime: Date.now() + 2,
          },
        ],
      },
    ];
  },
  getMailObjectEmailsOrderByDateAsc: (state, getters) => (id) => {
    //return the mailObject as-is, we don't need to verify that the ordering is correct here
    return { ...getters.getMailObject[0] };
  },
  isLoaded() {
    return true;
  },
};

const actions = {
  markEmailRead: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
};
