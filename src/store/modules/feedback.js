import feedbackService from "../../services/feedback/feedbackService";

const state = {
  feedbackOpen: false,
  feedbackResponseMessage: undefined,
  feedbackValidationMessage: undefined,
};

//getters
const getters = {
  isFeedbackOpen(state) {
    return state.feedbackOpen;
  },
  getFeedbackResponseMessage(state) {
    return state.feedbackResponseMessage;
  },
  getFeedbackValidationMessage(state) {
    return state.feedbackValidationMessage;
  },
};

// actions
const actions = {
  async sendFeedback(context, { feedback, route }) {
    //trim feedback
    feedback = feedback.trim();
    //clear existing validation error
    context.commit("setFeedbackValidationMessage", undefined);

    //Validate that feedback is 0-2000 characters long
    if (feedback.length <= 0) {
      context.commit(
        "setFeedbackValidationMessage",
        "feedbackValidationTooShortMessage"
      );
      return;
    } else if (feedback.length > 2000) {
      context.commit(
        "setFeedbackValidationMessage",
        "feedbackValidationTooLongMessage"
      );
      return;
    }

    //Handle feedback request
    const response = await feedbackService.post(feedback, route);
    // console.log(response);
    context.commit(
      "setFeedbackResponseMessage",
      response == "FEEDBACK SUBMITTED" ? "thankYouFeedback" : "serverError"
    );
    context.commit("setFeedbackOpen", false);
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
  setFeedbackValidationMessage(state, validationMessage) {
    state.feedbackValidationMessage = validationMessage;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
