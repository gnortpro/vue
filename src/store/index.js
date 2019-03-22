import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"
import CourseService from "@/services/CourseService.js"
import LoginService from "@/services/LoginService.js"
import UserService from "@/services/UserService"
import LessonService from "@/services/LessonService"
import TopicService from "@/services/TopicService"

Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
  state: {
    course: [],
    courseDetails: {},
    layout: "app-layout",
    hasToken: 0,
    user: [],
    userDetail: [],
    token: {},
    lessons: [],
    lessonDetail: [],
    topics: [],
    topicDetail: []
  },
  mutations: {
    SET_COURSE: (state, course) => (state.course = course),
    SET_COURSE_DETAIL: (state, payload) => (state.courseDetails = payload),
    SET_LAYOUT: (state, payload) => (state.layout = payload),
    CHECK_TOKEN: (state, hasToken) => (state.hasToken = hasToken),
    SET_USER: (state, payload) => (state.user = payload),
    SET_USER_DETAIL: (state, payload) => (state.userDetail = payload),
    SET_LOGIN: (state, token) => (state.token = token),
    SET_LESSONS: (state, payload) => (state.lessons = payload),
    SET_LESSON_DETAIL: (state, payload) => (state.lessonDetail = payload),
    SET_TOPICS: (state, payload) => (state.topics = payload),
    SET_TOPIC_DETAIL: (state, payload) => (state.topicDetail = payload)
  },
  actions: {
    fetchCource({ commit }) {
      CourseService.getCource()
        .then(response => {
          commit("SET_COURSE", response.data.courses)
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
    fetchLessons({ commit }) {
      LessonService.getListLessonOfCourse()
        .then(response => {
          commit("SET_LESSONS", response.data.lessons)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    fetchLessonDetail({ commit }) {
      LessonService.getLessonDetail()
        .then(response => {
          commit("SET_LESSON_DETAIL", response.data.lesson1)
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    fetchTopics({ commit }) {
      TopicService.getTopic()
        .then(response => {
          commit("SET_TOPICS", response.data.topic)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    getTopicDetails({ commit }) {
      TopicService.getLessonDetail()
        .then(response => {
          commit("SET_TOPIC_DETAIL", response.data.topic)
        })
        .catch(error => {
          console.log(error.response)
        })
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
