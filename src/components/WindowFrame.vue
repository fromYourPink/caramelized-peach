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
        <button class="w98__btn" type="button" aria-label="Close">×</button>
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
    offsetX: { type: String, default: "3vw" }       // 우측으로 밀리는 정도
  }
  ,
  computed: {
    frameStyle() {
      if (this.mode === "route") {
        return {
          width: "80vw",
          height: "90vh",
          marginLeft: "auto",
          marginRight: this.offsetX
        };
      }
      return {
        width: `min(${this.maxWidth}, ${this.width})`,
        height: `min(${this.maxHeight}, ${this.height})`,
        minWidth: this.minWidth,
        minHeight: this.minHeight,
        margin: "0 auto"
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
/* Win98 기본 팔레트(대충) */
.w98 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;

  background: #c0c0c0;
  color: #000;

  /* 바깥 프레임: 밝은 면 + 어두운 면으로 3D */
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;

  /* 안쪽 한 겹 더(그레이 라인) */
  padding: 2px;
}

/* 안쪽 프레임 한 겹 */
.w98::after {
  content: "";
  pointer-events: none;
  position: absolute;
  /* scoped라 position 없으면 적용 안 되니 w98에 relative 주기 */
}

.w98 {
  position: relative;
}

/* 타이틀바 */
.w98__titlebar {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2px 2px 2px 6px;

  background: linear-gradient(to right,
      #4a148c 0%,
      #6a1b9a 40%,
      #7b1fa2 100%);
  /* win98 파랑 */
  color: #fff;

  /* 타이틀바 아래 경계 */
  box-shadow: inset 0 -1px 0 #404040;
}

.w98__titlebar-left {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.w98__icon {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-top: 1px solid #404040;
  border-left: 1px solid #404040;
  border-right: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}

.w98__title {
  font-size: 16px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "DungGeunMo";
}

/* 버튼 3개 */
.w98__controls {
  display: flex;
  gap: 2px;
}

.w98__btn {
  width: 22px;
  height: 20px;
  padding: 0;
  cursor: pointer;

  background: #c0c0c0;
  color: #000;
  font-size: 14px;
  line-height: 18px;

  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
}

.w98__btn:active {
  border-top: 2px solid #404040;
  border-left: 2px solid #404040;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

/* 메뉴바 */
.w98__menubar {
  display: flex;
  gap: 14px;
  align-items: center;
  height: 26px;
  padding: 0 8px;

  background: #c0c0c0;
  color: #000;

  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #808080;
}

.w98__menuitem {
  background: transparent;
  font-family: "DungGeunMo";
  border: 0;
  padding: 2px 2px;
  font-size: 14px;
  /* cursor: pointer; */
}

.w98__menuitem:active {
  outline: 1px dotted #000;
}

/* 클라이언트(내용 영역) */
.w98__client {
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: #f3f0e8;

  /* 약간 베이지 */
  padding: 10px;

  /* 내용 영역도 살짝 파인 느낌 */
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}



.w98__client--scroll {
  overflow: auto;
}

/* 모바일에서 패딩/높이 축소 */
@media (max-width: 700px) {
  .w98__titlebar {
    height: 28px;
  }

  .w98__client {
    padding: 8px;
  }
}
</style>
