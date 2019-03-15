import Vue from "vue"
import Router from "vue-router"
import Logout from "@/components/logout"
import Login from "@/components/login/form.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/course",
      name: "course",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "../views/course/main.vue")
      }
    },

    {
      path: "/course/:id",
      name: "single-course",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "../views/course/single.vue")
      },
      props: true
    },

    {
      path: "/",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },

    {
      path: "/logout",
      name: "Logout",
      component: Logout
    },

    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "../views/test/Test.vue")
      }
    }
  ]
})
