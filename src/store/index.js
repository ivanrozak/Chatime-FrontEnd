import Vue from "vue";
import Vuex from "vuex";
import Chat from "./modules/chat";
import Auth from "./modules/auth";
import Friends from "./modules/friends";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Auth, Chat, Friends },
  plugins: [
    createPersistedState({
      paths: ["Auth.user"]
    })
  ]
});
