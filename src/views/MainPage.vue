<template>
  <!-- if use image, use bg-main-page -->
  <div class="main-page">

  </div>
</template>

<script>
export default {
  methods: {

    openSite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/MainPage.css");
</style>
