<template>
  <!-- if use image, use bg-main-page -->
  <div class="main-page">
    <div class="site-title-section">
      <img class="site-title" src="@/assets/imgs/title/title.png" />

    </div>
    <div class="nav-section">
      <div class="main-nav">
        <router-link to="/introduce" class="main-nav-item">
          <img class="nav-img" src="@/assets/imgs/icons/folder1.png" />
          Introduce </router-link>
        <router-link to="/gallary" class="main-nav-item">
          <img class="nav-img" src="@/assets/imgs/icons/folder2.png" />Gallary</router-link>
        <router-link to="/archive" class="main-nav-item"><img class="nav-img"
            src="@/assets/imgs/icons/folder3.png" />Archive</router-link>
        <span class="main-nav-item" @click="
          openSite(
            'https://amused-letter-39e.notion.site/Caramelized-Peach-1057274502d0809689d2d2ad0f56400f?pvs=74'
          )
          ">
          <img class="nav-img" src="@/assets/imgs/icons/folder4.png" />
          Develop-Note
          <unicon name="link" width="17" height="17" class="icon" fill="#fff" />
        </span>
      </div>
    </div>
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
