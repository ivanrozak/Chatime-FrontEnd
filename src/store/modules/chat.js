import axios from "axios";
export default {
  state: {
    message: [],
    listRoom: []
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.data;
    },
    setListRoom(state, payload) {
      state.listRoom = payload.data;
    }
  },
  actions: {
    getListRooms(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/room/${payload}`)
          .then(result => {
            context.commit("setListRoom", result.data);
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    getDataChats(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/getData`, payload)
          .then(result => {
            context.commit("setMessage", result.data);
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    postChats(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/`, payload)
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    }
  },
  getters: {
    getRoom(state) {
      return state.listRoom;
    },
    getMessage(state) {
      return state.message;
    }
  }
};
