import { shallowMount } from "@vue/test-utils";
import PhaseBanner from "../../../src/components/atoms/PhaseBanner";
import { createStore } from "vuex";
import { i18n } from "../../../i18n";

describe("PhaseBanner tests", () => {
  let store;
  beforeAll(() => {
    store = createStore({
      modules: {
        PhaseBanner,
      },
    });
  });
  test("this is the Phase text and link text", () => {
    const wrapper = shallowMount(PhaseBanner, {
      props: {
        phase: "Beta",
        linkText: "Back to something",
      },
      global: {
        provide: {
          store,
        },
        plugins: [i18n],
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Beta");
    expect(wrapper.text()).toContain("Back to something");
  });
});
