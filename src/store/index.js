import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"
import CourseService from "@/services/CourseService.js"
import LoginService from "@/services/LoginService.js"
import UserService from "@/services/UserService"

Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
  state: {
    course: [],
    courseDetails: {},
    layout: "app-layout",
    hasToken: 0,
    user: [],
    userDetail: [],
    token: {}
  },
  mutations: {
    SET_COURSE(state, course) {
      state.course = course
    },
    SET_COURSE_DETAIL(state, payload) {
      state.courseDetails = payload
    },
    SET_LAYOUT(state, payload) {
      state.layout = payload
    },
    CHECK_TOKEN(state, hasToken) {
      state.hasToken = hasToken
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_USER_DETAIL(state, payload) {
      state.userDetail = payload
    },
    SET_LOGIN(state, token) {
      state.token = token
    }
  },
  actions: {
    fetchCource({ commit }) {
      CourseService.getCource()
        .then(response => {
          commit("SET_COURSE", response.data)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchCourseDetails({ commit, getters }, id) {
      var singleCourse = getters.getCourseById(id)
      if (singleCourse) {
        commit("SET_COURSE_DETAIL", singleCourse)
      } else {
        CourseService.getCourceDetails(id)
          .then(response => {
            commit("SET_COURSE_DETAIL", response.data)
          })
          .catch(error => {
            console.log(error.response)
          })
      }
    },
    checkToken({ commit }) {
      LoginService.checkLogin()
        .then(response => {
          commit("CHECK_TOKEN", response.data.page)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchUser({ commit }) {
      UserService.getUserList()
        .then(response => {
          commit("SET_USER", response.data.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchUserDetail({ commit }, id) {
      UserService.getUserDetail(id)
        .then(response => {
          commit("SET_USER_DETAIL", response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  getters: {
    layout(state) {
      return state.layout
    },
    checkLogin(state) {
      return state.hasToken
    },
    getCourseById: state => id => {
      return state.course.find(courseDetails => courseDetails.id === id)
    }
  }
})
