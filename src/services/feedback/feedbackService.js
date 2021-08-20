import request from "../api";

function post(feedback) {
  //TODO: Connect to alpha/api/feedback when they give the go ahead
  console.log("TODO: connect to Alpha/api/feedback");
  // return request({
  //   url: "https://alpha.service.canada.ca/api/feedback",
  //   method: "POST",
  //   data: {
  //     application: "virtual-assistant",
  //     feedback: feedback,
  //   }
  // })
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     return error;
  //   });
}

const EmailService = {
  post, //, update, delete, etc. ...
};

export default EmailService;
