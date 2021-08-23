import { shallowMount, mount } from "@vue/test-utils";
import { createStore, useStore } from "vuex";
import { i18n } from "../../../i18n";
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");
import InboxItem from "../../../src/components/molecules/InboxItem";
import Inbox from "../../../src/components/molecules/Inbox";

describe("Inbox tests (loaded)", () => {
  const store = createStore({
    modules: {
      inbox,
    },
  });
  const wrapper = mount(Inbox, {
    global: {
      provide: {
        store,
      },
      plugins: [i18n],
    },
  });

  it("2 generated inboxitems", async () => {
    expect(wrapper.findAllComponents(InboxItem).length).toBe(2);
  });

  it("selecting InboxItem calls selectInboxItem action", async () => {
    await wrapper.find("li").trigger("click");
    expect(inbox.actions.selectInboxItem).toHaveBeenCalledTimes(1);
  });
});

describe("Inbox tests (while loading)", () => {
  inbox.getters.isLoaded = () => false; //force inbox to be in loading state
  const store = createStore({
    modules: {
      inbox,
    },
  });
  const wrapper = shallowMount(Inbox, {
    global: {
      provide: {
        store,
      },
      plugins: [i18n],
    },
  });

  it("default 2 empty inboxitems while loading", async () => {
    expect(wrapper.findAllComponents(InboxItem).length).toBe(2);
  });
});
