<template>
  <div className="bg-blue-medium">
    <div className="w-full mx-auto container px-5 pt-3">
      <div className="flex  flex-col sm:flex-row py-2 w-full mx-auto ">
        <div className="flex flex-row sm:flex-col  justify-between">
          <div
            className="mb-2 px-4 py-1 w-max font-body font-semibold leading-6 tracking-normal bg-blue-medium text-white outline-white "
          >
            {{ phase }}
          </div>
          <div className="pt-1 sm:pt-0 sm:mb-2 font-body sm:whitespace-nowrap">
            <a className="underline text-white" :href="link">
              {{ linkText }}
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:ml-6">
          <p className="font-body text-white block text-sm break-words pt-2">
            {{ children }}
          </p>
          <button
            class="
              font-body
              text-white text-sm
              font-bold
              flex
              justify-start
              py-4
              sm:pt-0
            "
            @click="toggleFeedbackOpenClick"
          >
            ▼{{ $t("giveFeedback") }}
          </button>
        </div>
      </div>
    </div>

    <FeedbackWidget
      v-if="feedbackOpen"
      :phase="$t('alpha')"
      :link="$t('privacyLink')"
      :linkText="$t('backToProject')"
      :children="$t('testSiteText')"
    />
  </div>
</template>

<script>
import FeedbackWidget from "../molecules/FeedbackWidget.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "PhaseBanner",
  props: {
    phase: String,
    link: String,
    linkText: String,
    children: String,
  },
  components: {
    FeedbackWidget,
  },
  setup() {
    const store = useStore();
    const feedbackOpen = computed(
      () => store.getters["feedback/isFeedbackOpen"]
    );
    function toggleFeedbackOpenClick() {
      if (feedbackOpen.value) store.dispatch("feedback/closeFeedback");
      else store.dispatch("feedback/openFeedback");
    }
    return {
      feedbackOpen,
      toggleFeedbackOpenClick,
    };
  },
};
</script>
