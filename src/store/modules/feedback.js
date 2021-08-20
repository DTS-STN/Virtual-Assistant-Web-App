// actions
const actions = {
  async sendFeedback(context, feedback) {
    console.log("sending feedback...");
    console.log(feedback);
  },
};

export default {
  namespaced: true,
  actions,
};
