<template>
  <div className="w-full bg-blue-mdlt">
    <div className=" mx-auto sm:container px-3 sm:px0 ">
      <div className="flex justify-between sm:mx-auto py-2 w-full">
        <p class="font-body text-white text-sm py-1">{{ notification }}</p>
        <button
          @click="clearFeedbackNotificationClick"
          class="
            flex
            bg-blue-mdlt
            hover:bg-blue-primary
            text-white text-base
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
          <span className="underline pl-2 text-body">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    notification: String,
  },
  name: "FeedbackNotification",
  setup(props, context) {
    const store = useStore();
    function clearFeedbackNotificationClick() {
      store.dispatch("feedback/clearFeedbackResponseMessage");
    }
    return {
      clearFeedbackNotificationClick,
    };
  },
};
</script>
