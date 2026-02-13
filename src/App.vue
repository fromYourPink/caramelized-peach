<template>
  <div id="app" class="no-select">
    <div class="main-bg">
      <img class="bg-pic pic1" src="@/assets/imgs/background/pic1.png" />
      <img class="bg-pic pic3" src="@/assets/imgs/background/pic3.png" />
      <img class="bg-pic pic2" src="@/assets/imgs/background/pic2.png" />
      <img class="bg-obj obj1" src="@/assets/imgs/background/object1.png" />
      <img class="bg-obj obj2" src="@/assets/imgs/background/object2.png" />
    </div>

    <div class="iconarea-container">
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
            $openSite(
              'https://amused-letter-39e.notion.site/Caramelized-Peach-1057274502d0809689d2d2ad0f56400f?pvs=74'
            )
            ">
            <img class="nav-img" src="@/assets/imgs/icons/folder4.png" />
            Develop-<br>Note
            <!-- <unicon name="link" width="13" height="13" class="icon" fill="#fff" /> -->
          </span>
        </div>
      </div>
    </div>
    <div v-if="isRoute" class="fade">
      <router-view />
    </div>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    isRoute() {
      return !(this.$route.path == "/");
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("@/assets/styles/pretendard.css");
@import url("@/assets/styles/App.css");
</style>


<style scoped></style>
