/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from "vue";
import Vuex from "vuex";

// Store functionality
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state
});

export default store;

// "use strict";

// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     layout: "login-layout"
//   },
//   mutations: {
//     SET_LAYOUT(state, payload) {
//       state.layout = payload;
//     }
//   },
//   getters: {
//     layout(state) {
//       return state.layout;
//     }
//   }
// });
