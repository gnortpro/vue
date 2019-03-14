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
//global
import Toolbar from "@/components/layouts/Toolbar.vue"
// Course
import CourseHeader from "@/components/course/header.vue"
import CourseProgressBar from "@/components/course/courseProgress.vue"
//Login
import LoginForm from "@/components/login/form.vue"
import CheckToken from "@/components/checkToken/main.vue"

//Test
import Test from "@/components/Test/test.vue"

Vue.component("Toolbar", Toolbar)
Vue.component("CourseHeader", CourseHeader)
Vue.component("CourseProgressBar", CourseProgressBar)
Vue.component("LoginForm", LoginForm)
Vue.component("CheckToken", CheckToken)

Vue.component("Test", Test)
new Vue({
  router,
  store,
  axios,
  render: function(h) {
    return h(App)
  }
}).$mount("#app")
