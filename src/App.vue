<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
window.adobeDataLayer = window.adobeDataLayer || [];
    adobeDataLayer.push({
      'event': 'pageload',
      'page' : document.title,
      'dcterms.language': document
      .getElementsByTagName("meta")
      ["dcterms.language"]
    });
</script>
