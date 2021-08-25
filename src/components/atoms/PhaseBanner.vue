<template>
  <div className="bg-blue-medium">
    <div className="w-full mx-auto container px-5 pt-3">
      <div className="flex  flex-col sm:flex-row py-2 w-full mx-auto ">
        <div className="flex flex-row sm:flex-col  justify-between">
          <div
            className="mb-2 px-4 py-1 w-max font-body font-semibold leading-6 tracking-normal bg-blue-medium text-white outline-white "
            data-cy="phase"
          >
            {{ phase }}
          </div>
          <div className="pt-1 sm:pt-0 sm:mb-2 font-body sm:whitespace-nowrap">
            <a
              className="underline text-white hover:text-gray-300 focus-visible:ring-white"
              :href="link"
              data-cy="project-link"
            >
              {{ linkText }}
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:ml-6">
          <p
            className="font-body text-white block text-sm break-words pt-2 sm:pt-0"
            data-cy="phase-text"
          >
            {{ phaseText }}
          </p>
          <button
            data-cy="widget-toggle"
            class="
              font-body
              text-white text-base
              hover:text-gray-300
              font-bold
              flex
              justify-start
              py-2
              sm:pt-2
              focus-visible:ring-white
            "
            @click="toggleFeedbackOpenClick"
          >
            <img
              v-if="feedbackOpen"
              id="caretOpen"
              className="h-6"
              src="../../assets/expanded.svg"
              :alt="$t('expanded')"
            />

            <img
              v-else
              id="caretClosed"
              className="h-6"
              src="../../assets/collapsed.svg"
              :alt="$t('collapsed')"
            />

            {{ $t("giveFeedback") }}
          </button>
        </div>
      </div>
    </div>

    <FeedbackWidget v-if="feedbackOpen" :link="$t('privacyLink')" />
    <FeedbackNotification
      v-else-if="feedbackResponseMessage"
      :notification="feedbackResponseMessage"
    />
  </div>
</template>

<script>
import FeedbackWidget from "../molecules/FeedbackWidget.vue";
import FeedbackNotification from "../atoms/FeedbackNotification.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "PhaseBanner",
  props: {
    phase: String,
    link: String,
    linkText: String,
    phaseText: String,
  },
  components: {
    FeedbackWidget,
    FeedbackNotification,
  },
  setup() {
    const store = useStore();
    const feedbackOpen = computed(
      () => store.getters["feedback/isFeedbackOpen"]
    );
    const feedbackResponseMessage = computed(
      () => store.getters["feedback/getFeedbackResponseMessage"]
    );
    function toggleFeedbackOpenClick() {
      if (feedbackOpen.value) store.dispatch("feedback/closeFeedback");
      else store.dispatch("feedback/openFeedback");
    }
    return {
      feedbackOpen,
      toggleFeedbackOpenClick,
      feedbackResponseMessage,
    };
  },
};
</script>
