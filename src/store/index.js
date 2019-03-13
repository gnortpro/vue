import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from "vue-axios"
import SourceService from "@/services/SourceService.js"
Vue.use(Vuex, axios, VueAxios)

export default new Vuex.Store({
  state: {
    course: [],
    layout: "app-layout"
  },
  mutations: {
    SET_COURSE(state, course) {
      state.course = course
    },
    SET_LAYOUT(state, payload) {
      state.layout = payload
    }
  },
  actions: {
    fetchCource({ commit }) {
      SourceService.getCource()
        .then(response => {
          commit("SET_COURSE", response.data.data)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    }
  },
  getters: {
    layout(state) {
      return state.layout
    }
  }
})
