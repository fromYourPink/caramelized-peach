<template>
  <div id="app" class="no-select">
    <div class="main-bg">
      <img class="bg-pic pic1" src="@/assets/imgs/background/pic1.png" />
      <img class="bg-pic pic3" src="@/assets/imgs/background/pic3.png" />
      <img class="bg-pic pic2" src="@/assets/imgs/background/pic2.png" />
      <img class="bg-obj obj1" src="@/assets/imgs/background/object1.png" />
      <img class="bg-obj obj2" src="@/assets/imgs/background/object2.png" />
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
