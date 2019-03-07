import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { store } from "./store";
import axios from "./backend/vue-axios";
Vue.use(Vuetify, Vuex);
Vue.config.productionTip = false;
import "vuetify/dist/vuetify.min.css";

import Toolbar from "@/components/layouts/Toolbar.vue";
import CourseHeader from "@/components/course/header.vue";
import LoginForm from "@/components/login/form.vue";

Vue.component("Toolbar", Toolbar);
Vue.component("CourseHeader", CourseHeader);
Vue.component("LoginForm", LoginForm);
new Vue({
  router,
  store,
  axios,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
