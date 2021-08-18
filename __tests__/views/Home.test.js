import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home";
import { createStore } from "vuex";
import { i18n } from "../../i18n";
import chatMessages from "../../src/store/modules/chatMessages";
jest.mock("../../src/store/modules/chatMessages");
import emails from "../../src/store/modules/emails";
jest.mock("../../src/store/modules/emails");
import inbox from "../../src/store/modules/inbox";
jest.mock("../../src/store/modules/inbox");

describe("Test Home.vue view", () => {
  let store;
  beforeAll(() => {
    store = createStore({
      modules: {
        chatMessages,
        emails,
        inbox,
      },
    });
  });
  it("Check for h1 exists", () => {
    const wrapper = mount(Home, {
      global: {
        provide: {
          store,
        },
        plugins: [i18n],
      },
    });

    const h1 = wrapper.find("h1");

    expect(h1.exists()).toBe(true);
  });

  it("Check for main exists", () => {
    const wrapper = mount(Home, {
      global: {
        provide: {
          store,
        },
        plugins: [i18n],
      },
    });

    const main = wrapper.find("main");

    expect(main.exists()).toBe(true);
  });
});
