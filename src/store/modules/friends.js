import axios from "axios";

export default {
  state: {
    friend: {},
    friendReqs: [],
    friendList: [],
    friendByEmail: {}
  },
  mutations: {
    setFriend(state, payload) {
      state.friend = payload;
    },
    setFriendByEmail(state, payload) {
      state.friendByEmail = payload;
    },
    setFriendReqs(state, payload) {
      state.friendReqs = payload;
    },
    setFriendList(state, payload) {
      state.friendList = payload;
    },
    clearFriend(state) {
      state.friend = {};
    }
  },
  actions: {
    addFriends(context, payload) {
      // console.log(context);
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}friends/add/`, payload)
          .then(result => {
            resolve(result.data.msg);
          })
          .catch(error => {
            reject(error.response.data.msg);
          });
      });
    },
    acceptFriends(context, payload) {
      // console.log(context);
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}friends/confirm`, payload)
          .then(result => {
            resolve(result.data.msg);
          })
          .catch(error => {
            reject(error.response.data.msg);
          });
      });
    },
    getFriendReqs(context, payload) {
      // console.log(context);
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}friends/invitation/${payload}`)
          .then(result => {
            // console.log(result.data.data);
            context.commit("setFriendReqs", result.data.data);
            resolve(result.data.data);
          })
          .catch(error => {
            console.log(error.response);
            reject(error.response.data.msg);
          });
      });
    },
    getFriendList(context, payload) {
      // console.log(context);
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}friends/friendList/${payload}`)
          .then(result => {
            console.log(result.data.data);
            context.commit("setFriendList", result.data.data);
            resolve(result.data.data);
          })
          .catch(error => {
            console.log(error.response);
            reject(error.response.data.msg);
          });
      });
    },
    getFriendByEmails(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}user/${payload}`)
          .then(result => {
            context.commit("setFriendByEmail", result.data.data[0]);
            resolve(result);
          })
          .catch(error => {
            reject(error.response);
          });
      });
    },
    clearFriends(context) {
      context.commit("clearFriend");
    }
  },
  getters: {
    getFriend(state) {
      return state.friend;
    },
    getFriendByEmail(state) {
      return state.friendByEmail;
    },
    getterFriendList(state) {
      return state.friendList;
    },
    getterFriendReqs(state) {
      return state.friendReqs;
    }
  }
};
