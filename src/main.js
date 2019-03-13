import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import Vuetify from "vuetify"
import store from "./store/index.js"
import axios from "./backend/vue-axios"

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.prototype.$http = axios

import "vuetify/dist/vuetify.min.css"

import Toolbar from "@/components/layouts/Toolbar.vue"
import CourseHeader from "@/components/course/header.vue"
import LoginForm from "@/components/login/form.vue"
import Test from "@/components/Test/test.vue"

Vue.component("Toolbar", Toolbar)
Vue.component("CourseHeader", CourseHeader)
Vue.component("LoginForm", LoginForm)

Vue.component("Test", Test)
new Vue({
  router,
  store,
  axios,
  render: function(h) {
    return h(App)
  }
}).$mount("#app")
