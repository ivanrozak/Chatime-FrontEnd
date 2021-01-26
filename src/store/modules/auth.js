import axios from "axios";
import router from "../../router/index";
export default {
  state: {
    user: {},
    token: localStorage.getItem("token") || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      state.token = payload.token;
    },
    setUserByEmail(state, payload) {
      state.user = payload;
    },
    delUser(state) {
      state.user = {};
      state.token = null;
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}user/login`, payload)
          .then(result => {
            context.commit("setUser", result.data.data);
            localStorage.setItem("token", result.data.data.token);
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    getUserByEmails(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}user/${payload}`)
          .then(result => {
            context.commit("setUserByEmail", result.data.data[0]);
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}user/register`, payload)
          .then(result => {
            resolve(result);
          })
          .catch(err => {
            reject(err.response);
          });
      });
    },
    updateProfileUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/${context.state.user.user_email}/update`,
            payload
          )
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    logout(context) {
      localStorage.removeItem("token");
      context.commit("delUser");
      router.push("/");
    },
    interceptorRequest(context) {
      console.log("interceptor request works!");
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`;
          return config;
        },
        function(error) {
          return Promise.reject(error);
        }
      );
    },
    interceptorResponse(context) {
      console.log("interceptor response works!");
      axios.interceptors.response.use(
        function(response) {
          return response;
        },
        function(error) {
          if (
            (error.response.data.status === 403 &&
              error.response.data.status === "invalid token") ||
            error.response.data.status === "invalid signature" ||
            error.response.data.status === "jwt expired" ||
            error.response.data.status === "jwt malformed"
          ) {
            context.dispatch("logout");
            alert(error.response.data.msg);
          }
          return Promise.reject(error);
        }
      );
    }
  },
  getters: {
    setUser(state) {
      return state.user;
    },
    isLogin(state) {
      return state.token !== null;
    }
  }
};
