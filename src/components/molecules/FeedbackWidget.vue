<template>
  <div class="w-full bg-blue-mdlt">
    <div class="mx-auto sm:container px-3 sm:px0 pt-3">
      <div
        class="
          flex
          justify-between
          sm:mx-auto
          py-2
          w-full
          text-white
          font-heading font-bold
          text-2xl
        "
      >
        {{ $t("improveService") }}
        <button
          @click="closeFeedbackClick"
          class="
            flex
            bg-blue-mdlt
            hover:bg-blue-primary
            text-white text-base
            py-2
            rounded
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="underline pl-2 text-body">{{ $t("close") }}</span>
        </button>
      </div>
      <ul class="list-outside list-disc px-6 py-2">
        <li class="text-white font-body mb-4">
          <strong>{{ $t("noReply") }}</strong
          >{{ " " }}
          <span
            >{{ $t("enquiries") }}{{ " " }}
            <a
              class="underline font-body hover:text-gray-300 text-white"
              href="mailto:experience@servicecanada.gc.ca"
            >
              experience@servicecanada.gc.ca
            </a>
          </span>
        </li>
        <li class="text-white font-body mb-4">
          <strong>{{ $t("confidential") }}</strong
          >{{ " " }}

          <a class="underline text-white" :href="link">
            {{ $t("privacyLinkText") }}
          </a>
        </li>
      </ul>
      <div class="pb-2">
        <label class="block pb-2">
          <span class="text-white font-body font-semibold">{{
            $t("doBetter")
          }}</span>
          <p class="text-white font-body">{{ $t("doBetterBody") }}</p>
          <p class="text-white font-body pt-2">{{ $t("max2000") }}</p>
          <ErrorLabel
            v-if="feedbackValidationMessage"
            :message="$t(feedbackValidationMessage)"
            colorClass=""
          />
          <textarea
            v-model="feedbackTextarea"
            class="mt-1 block w-full rounded bg-white border-transparent"
            rows="4"
            maxlength="2000"
          ></textarea>
        </label>

        <button
          @click="sendFeedbackClick"
          class="
            flex
            text-blue-medium
            font-semibold
            text-base
            bg-gray-default
            hover:bg-gray-medium hover:text-white
            py-2
            px-4
            rounded
            items-center
          "
        >
          {{ $t("submit") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FunctionButton from "../atoms/FunctionButton.vue";
import ErrorLabel from "../atoms/ErrorLabel.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { FunctionButton },
  components: { ErrorLabel },
  name: "FeedbackWidget",
  props: {
    phase: String,
    link: String,
    linkText: String,
    children: String,
  },
  setup(props, context) {
    const store = useStore();
    const feedbackTextarea = ref("");
    function closeFeedbackClick() {
      store.dispatch("feedback/closeFeedback");
    }
    function sendFeedbackClick() {
      store.dispatch("feedback/sendFeedback", feedbackTextarea.value);
    }
    const feedbackValidationMessage = computed(
      () => store.getters["feedback/getFeedbackValidationMessage"]
    );
    return {
      closeFeedbackClick,
      sendFeedbackClick,
      feedbackTextarea,
      feedbackValidationMessage,
    };
  },
};
</script>
