<template>
  <div
    class="w-full h-full flex flex-col p-4 sm:p-0 text-gray-dark sm:relative"
  >
    <div class="sticky top-0 opacity-95 bg-white md:opacity-100">
      <div class="flex border-b border-gray-200 px-2 py-4">
        <div
          class="h-10 mt-auto w-10 bg-gray-infolt rounded-full animate-pulse"
        />
        <div class="h-10 py-2 pl-2 w-1/3">
          <div class="bg-gray-infolt h-full animate-pulse" />
        </div>
      </div>
    </div>
    <div class="flex h-full overflow-auto"></div>
    <div class="sticky bottom-0 h-20 border-t" />
    <span class="bg-gray-infolt p-2 sm:p-0 h-20"></span>
  </div>
</template>

<script>
export default {
  name: "ConversationLoading",
  setup() {},
};
</script>
