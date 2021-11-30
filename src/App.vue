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
  event: "pageload",
  page: {
    title: document.title,
    language: document.getElementsByTagName("meta")["dcterms.language"],
    creator:
      "Employment and Social Development Canada/Emploi et Développement social Canada",
    accessRights: "2",
    service: "ESDC-EDSC_DC-CD",
  },
});
</script>
