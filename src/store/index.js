import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
    SET_CARDS(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    getData({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((response) => {
        commit("SET_CARDS", response.data);
      });
    },
  },
  modules: {},
});
