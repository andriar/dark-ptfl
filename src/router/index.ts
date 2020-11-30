import VueRouter, { RouteConfig } from "vue-router";

import Vue from "vue";

const Home = () => import(/* webpackChunkName: "about" */ "../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
