<template>
  <div class="flex w-full md:h-vh-3/5 xl:h-vh-2/3 text-gray-dark">
    <div
      class="
        w-full
        sm:w-2/5 sm:h-vh-3/5
        md:w-1/3
        xl:h-vh-2/3
        sm:max-w-sm sm:border sm:border-r-0 sm:border-gray
        flex flex-col flex-shrink-0
        sm:px-1
        md:px-0
      "
    >
      <inbox />
    </div>
    <!-- Conversation Window -->
    <div
      :class="[
        isMobileDrawerOpen ? 'left-0' : 'left-full',
        'inbox-transition fixed bg-white top-0 bottom-0 w-screen sm:left-0 sm:min-h-0 sm:h-vh-3/5 sm:relative sm:flex-auto sm:block sm:border sm:border-gray xl:h-vh-2/3',
      ]"
    >
      <ConversationWindow
        v-if="inboxItemType === 'chat'"
        @returning-to-inbox="returnToSelectedInboxItem"
      />
      <message-list
        v-else-if="inboxItemType === 'email'"
        @returning-to-inbox="returnToSelectedInboxItem"
      />
      <!-- Default to empty window if no item is selected/while loading -->
      <ConversationLoading v-else />
    </div>
  </div>
</template>

<script>
import Inbox from "../molecules/Inbox.vue";
import ConversationWindow from "./ConversationWindow.vue";
import MessageList from "../molecules/MessageList.vue";
import ConversationLoading from "../molecules/ConversationLoading.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    drawerOpen: Boolean,
  },
  components: {
    ConversationWindow,
    MessageList,
    ConversationLoading,
    Inbox,
  },
  setup() {
    const store = useStore();
    const inboxItemType = computed(
      () => store.getters["inbox/getSelectedInboxItemType"]
    );
    const isMobileDrawerOpen = computed(
      () => store.getters["inbox/isMobileDrawerOpen"]
    );
    function returnToSelectedInboxItem() {
      document.getElementById("selected-inbox-item").focus();
    }

    return {
      inboxItemType,
      isMobileDrawerOpen,
      returnToSelectedInboxItem,
    };
  },
};
</script>

<style scoped>
.inbox-transition {
  transition: 0.5s;
}
</style>
