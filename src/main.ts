import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;
import VueAnalytics from "vue-analytics";

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});

Vue.use(VueAnalytics, {
  id: "UA-175016604-1",
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
