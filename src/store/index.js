import { createStore, createLogger } from "vuex";
import chatMessages from "./modules/chatMessages";
import emails from "./modules/emails";
import inbox from "./modules/inbox";
import feedback from "./modules/feedback";

const debug = import.meta.env.NODE_ENV !== "production";

export const store = createStore({
  modules: {
    chatMessages,
    emails,
    inbox,
    feedback,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
