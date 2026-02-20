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

      <div class="w98__controls">
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

    <div class="w98__client" :class="scroll ? 'w98__client--scroll' : ''">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    titleMode: { type: String, default: "route" },
    showTitlebar: { type: Boolean, default: true },
    scroll: { type: Boolean, default: true },
    menu: { type: Array, default: () => [] },

    // route 전용 위치/크기(원하시면 여기만 조정하면 됨)
    width: { type: String, default: "80vw" },
    height: { type: String, default: "90vh" },
    offsetX: { type: String, default: "3vw" },
    offsetY: { type: String, default: "4vh" }
  },
  computed: {
    frameStyle() {
      return {
        width: this.width,
        height: this.height,
        marginLeft: "auto",
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