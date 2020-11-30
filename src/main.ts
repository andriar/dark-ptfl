import "./registerServiceWorker";

import App from "./App.vue";
// import VModal from "vue-js-modal/dist/index.nocss.js";
import Vue from "vue";
import VueAnalytics from "vue-analytics";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
// import "vue-js-modal/dist/styles.css";


Vue.config.productionTip = false;

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});
// Vue.use(VModal);

Vue.use(VueAnalytics, {
  id: "UA-175016604-1",
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
