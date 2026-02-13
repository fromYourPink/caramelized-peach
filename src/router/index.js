import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import Introduce from "../views/Introduce.vue";
import ConvArch from "../views/ConvArch.vue";
import Gallary from "../views/Gallary.vue";

Vue.use(VueRouter);

const base =
  process.env.NODE_ENV === "production" ? "/caramelized-peach/" : "/";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/introduce",
    name: "Introduce",
    component: Introduce,
  },
  {
    path: "/archive",
    name: "Chat-archive",
    component: ConvArch,
  },
  {
    path: "/gallary",
    name: "Gallary",
    component: Gallary,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: base,
});

export default router;
