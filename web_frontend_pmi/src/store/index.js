import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggingIn: false,
    loggingError: null,
    accessToken: null,
  },

  mutations: {
    loginStart: (state) => (state.loggingIn = true),
    loginStop: (state, messageError) => {
      state.loggingIn = false;
      state.loggingError = messageError;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    },
  },

  actions: {
    doLogin({ commit }, data) {
      commit("loginStart");
      axios.get("/sanctum/csrf-cookie").then((result) => {
        console.log(result);
        axios
          .post("/api/v1/auth/admin/login", data)
          .then((response) => {
            console.log(response);
            localStorage.setItem("accessToken", response.data.token);
            commit("loginStop", null);
            commit("updateAccessToken", response.data.token);
            router.push({ name: "bloodTable" });
          })
          .catch((err) => {
            console.log(err);
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            commit("loginStop", err.response.data.message);
            commit("updateAccessToken", null);
          });
      });
    },
    fetchAccessToken({ commit }) {
      commit("updateAccessToken", localStorage.getItem("accessToken"));
    },
    logoutAll({ commit }) {
      localStorage.removeItem("accessToken");
      commit("logout");
      router.push({ name: "loginForm" });
    },
  },

  modules: {},
});
