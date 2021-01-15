import VueRouter, { RouteConfig } from "vue-router";

import Vue from "vue";

const Home = () => import(/* webpackChunkName: "about" */ "../views/Home.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
