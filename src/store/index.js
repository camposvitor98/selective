import { createStore } from "vuex";
import Mock from "../../server.json";
import { api } from "@/services/api";

export default createStore({
  state: {
    currentFilter: `Todos`,
    cardsData: [],
    cardsNavData: [],
  },
  mutations: {
    setCurrentFilter: (state, payload) => (state.currentFilter = payload),
    setCardsData: (state, payload) => (state.cardsData = payload),
    sortCardsData: (state, payload) =>
      (state.cardsData = state.cardsData.sort((a, b) => {
        if (a[payload] > b[payload]) return 1;
        if (a[payload] < b[payload]) return -1;
        return 0;
      })),
    setCardsNavData: (state, payload) => (state.cardsNavData = payload),
  },
  getters: {
    filteredCards: (state) =>
      state.cardsData.filter(
        (card) =>
          state.currentFilter === "Todos" || card.title === state.currentFilter
      ),
  },
  actions: {
    getCardsData: async ({ commit }) => {
      const payload = await api
        .get("cards")
        .then(({ data }) => {
          console.log("certo => ", data);
          return data;
        })
        .catch((err) => {
          console.log(Mock);
          console.log("erro => ", err);
          return Mock.cards;
        });
      return commit("setCardsData", payload);
    },
    getCardsNavData: async ({ commit }) => {
      const payload = await api
        .get("nav-cards")
        .then(({ data }) => {
          console.log("certo => ", data);
          return data;
        })
        .catch((err) => {
          console.log(Mock);
          console.log("erro => ", err);
          return Mock["nav-cards"];
        });
      return commit("setCardsNavData", payload);
    },
  },
});
