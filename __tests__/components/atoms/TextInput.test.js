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
    const quickReply = wrapper.findAll("button").filter((btn) => {
      return btn.text() === "Yes";
    })[0]; //get the chatoptionbutton
    quickReply.trigger("click");
    expect(wrapper.emitted("add-message")).toBeTruthy();
  });
});
