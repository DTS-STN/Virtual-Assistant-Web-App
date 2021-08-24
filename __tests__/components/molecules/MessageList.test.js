import { shallowMount, mount } from "@vue/test-utils";
import { createStore, useStore } from "vuex";
import { i18n } from "../../../i18n";
import MessageCard from "../../../src/components/molecules/MessageCard";
import MessageHeader from "../../../src/components/atoms/MessageHeader";
import MessageList from "../../../src/components/molecules/MessageList";
import emails from "../../../src/store/modules/emails";
jest.mock("../../../src/store/modules/emails");
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");

describe("MessageList component", () => {
  const store = createStore({
    modules: {
      emails,
      inbox,
    },
  });
  const wrapper = mount(MessageList, {
    global: {
      provide: {
        store,
      },
      plugins: [i18n],
    },
  });

  it("store's markEmailRead action called after render", () => {
    expect(emails.actions.markEmailRead).toHaveBeenCalledTimes(1);
  });

  it("number of MessageCards = 2 when 2 messages are supplied", async () => {
    expect(wrapper.findAllComponents(MessageCard).length).toBe(2);
  });

  it("Verify that a MessageHeader is generated", async () => {
    expect(wrapper.findComponent(MessageHeader).exists()).toBe(true);
  });
});
