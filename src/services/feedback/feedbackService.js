import request from "../api";

function post(feedback, route) {
  return request({
    url: process.env.VITE_APP_FEEDBACK_API_URL,
    method: "POST",
    data: {
      project: "virtual-assistant",
      pageUrl: route,
      feedback: feedback,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

const EmailService = {
  post, //, update, delete, etc. ...
};

export default EmailService;
