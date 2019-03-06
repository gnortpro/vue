import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.productionTip = false;
import "vuetify/dist/vuetify.min.css";

import Toolbar from "@/components/layouts/Toolbar.vue";
import CourseHeader from "@/components/course/header.vue";

Vue.component("Toolbar", Toolbar);
Vue.component("CourseHeader", CourseHeader);
new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
