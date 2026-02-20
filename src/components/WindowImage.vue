<template>
  <section class="w98 w98--decor" :style="[frameStyle, windowStyle]">
    <header v-if="showTitlebar" class="w98__titlebar">
      <div class="w98__titlebar-left">
        <!-- <slot name="icon">
          <span class="w98__icon" aria-hidden="true"></span>
        </slot> -->
        <div class="w98__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
    </header>

    <div class="w98__client w98__client--no-pad">
      <img class="w98__img" :src="src" :alt="alt" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },

    title: { type: String, default: "" },
    showTitlebar: { type: Boolean, default: true },

    // 크기는 “width만” 주고, 높이는 이미지 비율대로 자동
    width: { type: String, default: "260px" },
    maxWidth: { type: String, default: "92vw" },

    // 여러 개 띄우기(좌표/레이어) — 필요할 때만
    windowStyle: { type: Object, default: () => ({ position: "absolute" }) }
  },
  computed: {
    frameStyle() {
      return {
        width: `min(${this.maxWidth}, ${this.width})`,
        margin: "0" // 기존 .w98 margin: 0 auto를 끊어야 겹치기 쉬움 :contentReference[oaicite:0]{index=0}
      };
    }
  }
};
</script>

<style scoped>
@import url("@/assets/styles/WindowFrame.css");

.w98__img {
  width: 100%;
  height: auto;
  display: block;
}
</style>