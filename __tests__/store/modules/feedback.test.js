// import feedback from "../../../src/store/modules/feedback";
// import feedbackService from "../../../src/services/feedback/feedbackService";
// import { createStore } from "vuex";
// jest.mock("../../../src/services/feedback/feedbackService");

// describe("feedback api", () => {
//   let store;
//   let mockedMutations;
//   beforeEach(() => {
//     const state = (feedback.state = {
//       feedbackOpen: false,
//       feedbackResponseMessage: undefined,
//       feedbackValidationMessage: undefined,
//     });
//     mockedMutations = {
//       setFeedbackOpen: jest.fn(),
//       setFeedbackResponseMessage: jest.fn(),
//       setFeedbackValidationMessage: jest.fn(),
//     };

//     store = createStore({
//       modules: {
//         feedback: {
//           namespaced: true,
//           state: state,
//           actions: feedback.actions,
//           mutations: mockedMutations,
//         },
//       },
//     });
//   });

//   it("ensures the response message is set", async () => {
//     feedbackService.post.mockResolvedValue("FEEDBACK SUBMITTED");
//     await store.dispatch("feedback/sendFeedback", {
//       feedback: "test",
//       route: "www.fake.com",
//     });
//     expect(mockedMutations.setFeedbackResponseMessage).toHaveBeenCalledTimes(1);

//     // expect(store.getters["feedback/getFeedbackResponseMessage"]).toEqual(
//     //   "Success"
//     // );
//   });

//   it("tests for too long feedback", async () => {
//     feedbackService.post.mockResolvedValue("FEEDBACK SUBMITTED");
//     await store.dispatch("feedback/sendFeedback", {
//       feedback: "@".repeat(2001),
//       route: "www.fake.com",
//     });
//     expect(mockedMutations.setFeedbackValidationMessage).toHaveBeenCalledTimes(
//       2
//     );

//     // expect(store.getters["feedback/getFeedbackResponseMessage"]).toEqual(
//     //   "Failed"
//     // );
//   });

//   it("tests for too short feedback", async () => {
//     feedbackService.post.mockResolvedValue("FEEDBACK SUBMITTED");
//     await store.dispatch("feedback/sendFeedback", {
//       feedback: "",
//       route: "www.fake.com",
//     });
//     expect(mockedMutations.setFeedbackValidationMessage).toHaveBeenCalledTimes(
//       2
//     );

//     // expect(store.getters["feedback/getFeedbackResponseMessage"]).toEqual(
//     //   "Failed"
//     // );
//   });
// });
