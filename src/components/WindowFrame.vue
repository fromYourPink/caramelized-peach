<template>
  <section class="w98" :style="frameStyle">
    <header v-if="showTitlebar" class="w98__titlebar">
      <div class="w98__titlebar-left">
        <slot name="icon">
          <span class="w98__icon" aria-hidden="true"></span>
        </slot>
        <div class="w98__title">
          <slot name="title">{{ computedTitle }}</slot>
        </div>

      </div>

      <div v-if="controlBtn" class="w98__controls">
        <button class="w98__btn" type="button" aria-label="Minimize">_</button>
        <button class="w98__btn" type="button" aria-label="Maximize">□</button>
        <button class="w98__btn" type="button" aria-label="Close" @click="$goHome()">×</button>
      </div>
    </header>

    <nav v-if="hasMenu" class="w98__menubar">
      <button v-for="(item, i) in menu" :key="i" class="w98__menuitem" type="button">
        {{ item }}
      </button>
    </nav>


    <div class="w98__client" :class="[scroll ? 'w98__client--scroll' : '', bodyClass]">
      <slot></slot>
    </div>

  </section>
</template>

<script>
export default {
  name: "Win98Window",
  props: {
    title: { type: String, default: "" },
    titleMode: { type: String, default: "manual" },
    showTitlebar: { type: Boolean, default: true },
    scroll: { type: Boolean, default: true },
    menu: { type: Array, default: () => [] },
    bodyClass: { type: [String, Array, Object], default: "" },
    mode: { type: String, default: "route" },       // route | decor
    anchor: { type: String, default: "right" },     // center | right
    offsetX: { type: String, default: "3vw" },       // 우측으로 밀리는 정도
    offsetY: { type: String, default: "4vh" },
    controlBtn: { type: Boolean, default: true }
  }
  ,
  computed: {
    frameStyle() {
      if (this.mode === "route") {
        return {
          width: "80vw",
          height: "90vh",
          marginLeft: "auto",
          marginRight: this.offsetX,
          marginTop: this.offsetY
        };
      }
      return {
        width: `min(${this.maxWidth}, ${this.width})`,
        height: `min(${this.maxHeight}, ${this.height})`,
        minWidth: this.minWidth,
        minHeight: this.minHeight,
        marginRight: this.offsetX,
        marginTop: this.offsetY
      };
    },
    computedTitle() {
      if (this.titleMode === "route") {
        const r = this.$route || {};
        return (r.meta && r.meta.title) || r.name || r.path || this.title;
      }
      return this.title;
    },
    hasMenu() {
      return Array.isArray(this.menu) && this.menu.length > 0;
    }
  }
};
</script>

<style scoped>
@import url("@/assets/styles/WindowFrame.css");
</style>
