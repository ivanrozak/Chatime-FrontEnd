<template>
  <div>
    <b-row>
      <b-col sm="12" md="4" lg="3">
        <LeftChat />
      </b-col>
      <b-col sm="12" md="8" lg="9">
        <RightChat />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LeftChat from "../components/Chat/LeftSide";
import RightChat from "../components/Chat/RightSide";
export default {
  components: {
    LeftChat,
    RightChat
  },
  data() {
    return {
      modalInviteFriend: false,
      modalReqFriend: false,
      modalFriendList: false,
      formFriend: {
        friend_email: ""
      }
    };
  },
  created() {
    this.getFriendList(this.user.user_id);
    // this.getListRooms(this.user.user_id);
  },
  mounted() {},
  computed: {
    ...mapGetters({
      user: "setUser",
      friendByEmail: "getFriendByEmail",
      friendList: "getterFriendList",
      listRoom: "getRoom",
      messages: "getMessage"
    })
  },
  methods: {
    ...mapActions([
      "getFriendByEmails",
      "addFriends",
      "getFriendList",
      "logout",
      "getListRooms",
      "getDataChats",
      "postChats"
    ]),
    getFriendByEmail() {
      this.getFriendByEmails(this.formFriend.friend_email)
        .then(result => {
          alert(result);
        })
        .catch(error => {
          alert(error);
        });
    },
    addFriend() {
      this.getFriendByEmail();
      const data = {
        user_id: this.user.user_id,
        friend_id: this.friendByEmail.user_id
      };
      this.addFriends(data)
        .then(result => {
          alert(result);
        })
        .catch(error => {
          alert(error);
        });
    },
    logouts() {
      this.logout();
    },
    toProfilePage() {
      this.$router.push("profile");
    },
    test() {
      console.log(this.friendByEmail);
    }
  }
};
</script>
<style scoped>
.left {
  height: 100%;
}
.right {
  padding: 0px;
  height: 100%;
}
.base-c {
  color: #7e98df;
}
.nav-2 {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
}
.search {
  display: flex;
  background-color: #fafafa;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
}
input {
  width: 100%;
}
.btn-plus {
  padding: 10px 10px;
}
.chat-room {
  display: flex;
  align-items: center;
  padding: 20px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
}
.chat-room-content {
  width: 100%;
}
.time {
  color: rgb(107, 107, 107);
}
.notif-small {
  background-color: #7e98df;
  color: white;
  text-align: center;
  border-radius: 20px;
}
h6 {
  margin: 0px;
}
p {
  margin: 0px;
}
.header {
  padding: 30px 20px 20px;
  display: flex;
  background-color: white;
}
.chat-content {
  padding: 20px;
  background-color: rgb(231, 230, 230);
  height: 470px;
  overflow-y: scroll;
}
.send {
  display: flex;
  margin: 10px 0px;
}
.avatar-sm {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-right: 10px;
}
.chat-text {
  background-color: #7e98df;
  padding: 5px 20px;
  border-radius: 0px 15px 15px 15px;
  color: white;
}
.chat-action {
  background-color: white;
  padding: 30px;
}
.input {
  display: flex;
  background-color: rgb(241, 238, 238);
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
}
.icon-small {
  color: #7e98df;
  margin: 0px 10px;
}
</style>
