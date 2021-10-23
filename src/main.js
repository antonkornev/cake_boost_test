import Vue from "vue";
import App from "@/App.vue";
import store from "@/store/index"
import router from "@/router/index"
import VueRouter from "vue-router";

import VModal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");