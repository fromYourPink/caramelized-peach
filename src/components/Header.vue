<template>
  <div class="header">
    <router-link to="/" class="logo-section">
      <!-- <div class="logo-item">Caramelized</div>
            <div class="logo-item">Peach</div> -->
      <div class="logo-item">THE LIVERFORD TIMES</div>
    </router-link>
    <div class="info-section">
      {{ getTodayDate() }}
    </div>
    <div class="nav">
      <router-link to="/introduce" class="nav-item" :class="isRoute('/introduce')">Introduce</router-link>
      <router-link to="/gallary" class="nav-item" :class="isRoute('/gallary')">Gallary</router-link>
      <router-link to="/archive" class="nav-item" :class="isRoute('/archive')">Archive</router-link>
      <span class="nav-item long-item" @click="
        $openSite(
          'https://amused-letter-39e.notion.site/Caramelized-Peach-1057274502d0809689d2d2ad0f56400f?pvs=74'
        )
        ">Develop-Note
        <unicon name="link" width="15" height="15" class="icon" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(targetRoute) {
      if (this.$route.path === targetRoute) {
        return "is-active";
      }
      return "";
    },
    getTodayDate() {
      const today = new Date();
      const optionsDate = {
        timeZone: "Asia/Seoul", // KST 타임존 설정
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };

      const optionsWeekday = {
        timeZone: "Asia/Seoul",
        weekday: "long",
      };

      // 날짜 포맷 (년. 월. 일 형식으로 가져오기)
      const formattedDate = new Intl.DateTimeFormat(
        "ko-KR",
        optionsDate
      ).format(today);
      const [year, month, day] = formattedDate
        .split(". ")
        .map((part) => part.replace(".", ""));

      // 요일 포맷 (영어로 요일 가져오기)
      const weekday = new Intl.DateTimeFormat("en-US", optionsWeekday).format(
        today
      );

      // "DD-MM-YYYY (요일)" 형식으로 반환
      return `${weekday} ${day}-${month}-${year} `;
    },
  },
};
</script>

<style>
@import url("@/assets/styles/Header.css");
</style>
