<template>
  <div className="bg-blue-mdlt">
    <div className="w-full mx-auto container px-5 pt-3 bg-yellow-200">
      <div
        className="flex justify-between  py-2 w-full mx-auto text-white font-body font-bold  text-2xl
          bg-green-300 "
      >
        {{ $t("improveService") }}
        <button
          class="
            flex
            bg-blue-mdlt
            hover:bg-blue-primary
            text-white text-base
            py-2
            px-4
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
          <span className="underline pl-2">Close</span>
        </button>
      </div>
      <ul class="list-outside list-disc px-6 py-2">
        <li class="text-white font-body mb-4">
          <strong>{{ $t("noReply") }}</strong
          >{{ " " }}
          <span
            >{{ $t("enquiries") }}{{ " " }}
            <a
              className="underline  font-body hover:text-gray-300 text-white"
              href="mailto:experience@servicecanada.gc.ca"
            >
              experience@servicecanada.gc.ca
            </a>
          </span>
        </li>
        <li class="text-white font-body mb-4">
          <strong>{{ $t("confidential") }}</strong
          >{{ " " }}

          <a className="underline text-white" :href="link">
            {{ $t("privacyLinkText") }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FunctionButton from "../atoms/FunctionButton.vue";
export default {
  components: { FunctionButton },
  name: "FeedbackWidget",
  props: {
    phase: String,
    link: String,
    linkText: String,
    children: String,
  },
};
</script>
