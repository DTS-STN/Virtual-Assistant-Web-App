import feedbackService from "../../services/feedback/feedbackService";

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
    //Validate feedback is 0-2000 characters long
    if (feedback && feedback.length > 0 && feedback.length <= 2000)
      feedbackService.post(feedback);
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
