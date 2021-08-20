const state = {
  feedbackOpen: false,
  feedbackTextarea: "",
};

//getters
const getters = {
  isFeedbackOpen(state) {
    return state.feedbackOpen;
  },
};

// actions
const actions = {
  async sendFeedback(context, feedback) {
    console.log("sending feedback...");
    console.log(feedback);
  },
  async openFeedback(context) {
    context.commit("setFeedbackOpen", true);
  },
  async closeFeedback(context) {
    context.commit("setFeedbackOpen", false);
  },
};

// mutations
const mutations = {
  setFeedbackOpen(state, isOpen) {
    state.feedbackOpen = isOpen;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
