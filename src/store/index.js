import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import auth from "./auth";
Vue.use(Vuex, axios, VueAxios);

export default new Vuex.Store({
  state: {
    coins: [],
    token: []
  },

  mutations: {
    SET_COINS(state, coins) {
      state.coins = coins;
    },
    SET_LOGIN(state, token) {
      state.token = token;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    loadCoins({ commit }) {
      axios
        .get("http://localhost:4000/results")
        .then(r => r.data)
        .then(coins => {
          commit("SET_COINS", coins);
        });
    }
  },
  modules: {
    auth
  }
});
