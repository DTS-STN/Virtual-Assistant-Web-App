import feedbackService from "../../services/feedback/feedbackService";

const state = {
  feedbackOpen: false,
  feedbackResponseMessage: undefined,
};

//getters
const getters = {
  isFeedbackOpen(state) {
    return state.feedbackOpen;
  },
  getFeedbackResponseMessage(state) {
    return state.feedbackResponseMessage;
  },
};

// actions
const actions = {
  async sendFeedback(context, feedback) {
    //Validate feedback is 0-2000 characters long
    if (feedback && feedback.length > 0 && feedback.length <= 2000) {
      const responseMessage = feedbackService.post(feedback);
      context.commit("setFeedbackResponseMessage", responseMessage);
      context.commit("setFeedbackOpen", false);
    }
  },
  async openFeedback(context) {
    context.commit("setFeedbackOpen", true);
  },
  async closeFeedback(context) {
    context.commit("setFeedbackOpen", false);
  },
  async clearFeedbackResponseMessage(context) {
    context.commit("setFeedbackResponseMessage", undefined);
  },
};

// mutations
const mutations = {
  setFeedbackOpen(state, isOpen) {
    state.feedbackOpen = isOpen;
  },
  setFeedbackResponseMessage(state, responseMessage) {
    state.feedbackResponseMessage = responseMessage;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
