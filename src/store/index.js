import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"
import CourseService from "@/services/CourseService.js"
//import LoginService from "@/services/LoginService.js"
import UserService from "@/services/UserService"
import LessonService from "@/services/LessonService"
import TopicService from "@/services/TopicService"

Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
  state: {
    course: [],
    courseDetails: {},
    layout: "app-layout",
    lessons: [],
    lessonDetail: [],
    topics: [],
    topicDetail: [],
    accessToken: null,
    loggingIn: false,
    loginError: null
  },
  mutations: {
    SET_COURSE: (state, course) => (state.course = course),
    SET_COURSE_DETAIL: (state, payload) => (state.courseDetails = payload),
    SET_LAYOUT: (state, payload) => (state.layout = payload),
    SET_LESSONS: (state, payload) => (state.lessons = payload),
    SET_LESSON_DETAIL: (state, payload) => (state.lessonDetail = payload),
    SET_TOPICS: (state, payload) => (state.topics = payload),
    SET_TOPIC_DETAIL: (state, payload) => (state.topicDetail = payload),
    loginStart: state => (state.loggingIn = true),
    loginStop: (state, errorMessage) => {
      state.loggingIn = false
      state.loginError = errorMessage
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken
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
    fetchLessons({ commit }, id) {
      LessonService.getListLessonOfCourse(id)
        .then(response => {
          commit("SET_LESSONS", response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchLessonDetail({ commit }, id) {
      LessonService.getLessonDetail(id)
        .then(response => {
          commit("SET_LESSON_DETAIL", response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    fetchTopics({ commit }, id) {
      TopicService.getTopicByLessonId(id)
        .then(response => {
          commit("SET_TOPICS", response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    getTopicDetails({ commit }, id) {
      TopicService.getLessonDetail(id)
        .then(response => {
          commit("SET_TOPIC_DETAIL", response.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchLogin({ commit }, user) {
      commit("loginStart")
      UserService.postLogin(user)
        .then(response => {
          localStorage.setItem("accessToken", response.data.token)
          commit("loginStop", null)
          commit("updateAccessToken", response.data.token)
        })
        .catch(error => {
          commit("loginStop", error.response.data.error)
          commit("updateAccessToken", null)
        })
    },
    fetchAccessToken({ commit }) {
      commit("updateAccessToken", localStorage.getItem("accessToken"))
      commit("SET_LAYOUT", "app-layout")
    }
  },
  getters: {
    layout(state) {
      return state.layout
    },
    getCourseById: state => id => {
      return state.course.find(courseDetails => courseDetails.ID === id)
    },
    number_lesson_of_course(state) {
      return state.lessons.length
    },
    number_topic_of_lesson(state) {
      return state.topics.length
    }
  }
})
