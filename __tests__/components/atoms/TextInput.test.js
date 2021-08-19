import { mount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import TextInput from "../../../src/components/atoms/TextInput";
import ChatOptionButton from "../../../src/components/atoms/ChatOptionButton.vue";

describe("TextInput component", () => {
  const wrapper = mount(TextInput, {
    global: {
      plugins: [i18n],
    },
  });

  it("2 ChatOptionButtons are rendered if there's 2 options supplied", async () => {
    await wrapper.setProps({
      buttonOptions: ["Yes", "No"],
    });
    expect(wrapper.findAllComponents(ChatOptionButton).length).toBe(2);
  });

  it("pressing ChatOptionButton emits add-message", async () => {
    await wrapper.setProps({
      buttonOptions: ["Yes"],
    });
    const quickReply = await wrapper.findAll("button").filter((btn) => {
      return btn.text() === "Yes";
    })[0]; //get the chatoptionbutton
    await quickReply.trigger("click");
    expect(wrapper.emitted("add-message")).toBeTruthy();
  });

  describe("input methods are called properly", () => {
    const input = wrapper.find("input");

    it("keydown.up emits move-to-most-recent-message", async () => {
      await input.trigger("keydown.up");
      expect(wrapper.emitted("move-to-most-recent-message")).toBeTruthy();
    });

    it("blur emits reset-chat-window", async () => {
      await input.trigger("blur");
      expect(wrapper.emitted("reset-chat-window")).toBeTruthy();
    });

    it("keyup.enter emits add-message", async () => {
      await input.trigger("keyup.enter");
      expect(wrapper.emitted("add-message")).toBeTruthy();
    });
  });
});
