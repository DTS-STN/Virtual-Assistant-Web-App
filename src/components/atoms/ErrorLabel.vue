<template>
  <div>
    <div
      id="message-error-box"
      :class="[
        'border-l-4 border-error-main px-3 py-1 bg-error-light font-body font-bold my-2 text-sm lg:text-md rounded-r',
        colorClass,
      ]"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    colorClass: String,
  },
};
</script>
