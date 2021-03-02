<template>
  <div class="main">
    <div class="navbar flexs">
      <b-navbar-brand class="c-blue f-large">Telegram</b-navbar-brand>
      <b-dropdown right variant="none" class="ml-auto" no-caret
        ><template slot="button-content"
          ><img src="../../assets/icon/Menu.png" alt=""
        /></template>

        <b-dropdown-item @click="toProfilePage()" variant="primary"
          ><b-icon icon="gear-fill" class="mr-2 c-blue c-blue"></b-icon>
          Settings</b-dropdown-item
        >
        <b-dropdown-item
          @click.prevent="modalFriendList = !modalFriendList"
          variant="primary"
          ><b-icon icon="person" class="mr-2 c-blue"></b-icon
          >Contacts</b-dropdown-item
        >
        <b-modal v-model="modalFriendList" ref="modal" title="List Friends">
          <div v-for="(item, index) in friendList" :key="index">
            <b-container fluid>
              <b-row>
                <b-col cols="3" style="text-align:center">
                  <img
                    style="width: 80px; height: 80px; border-radius: 15px;"
                    v-if="!item.user_image"
                    src="../../assets/blank-profile-picture-973460_1280.png"/>
                  <img
                    style="width: 80px; height: 80px; border-radius: 15px;"
                    id="imageUploads"
                    class="imgUpload"
                    v-if="item.user_image"
                    :src="'http://localhost:3000/users/' + item.user_image"
                /></b-col>
                <b-col>
                  <br />
                  {{ item.user_name }} <br />
                  {{ item.user_email }}
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-modal>
        <b-dropdown-item
          @click.prevent="modalInviteFriend = !modalInviteFriend"
          variant="primary"
          ><b-icon icon="person-plus" class="mr-2 c-blue"></b-icon>Invite
          friends</b-dropdown-item
        >
        <b-modal
          v-model="modalInviteFriend"
          ref="modal"
          title="Add New Friends"
          hide-footer
        >
          <form ref="form">
            <b-form-group
              label="Input Friend Email"
              label-for="name-input"
              invalid-feedback="Email is required"
            >
              <b-form-input
                id="name-input"
                v-model="formFriend.friend_email"
                required
              ></b-form-input>
            </b-form-group>
          </form>
          <b-button @click.prevent="addFriend" variant="success"
            >Add Friend</b-button
          >
        </b-modal>
        <b-dropdown-item
          @click.prevent="modalReqFriend = !modalReqFriend"
          variant="primary"
          ><b-icon icon="person-plus" class="mr-2 c-blue"></b-icon>Friend
          request</b-dropdown-item
        >
        <b-modal
          v-model="modalReqFriend"
          ref="modal"
          title="Add New Friends"
          hide-footer
        >
          <div v-for="(item, index) in friendList" :key="index">
            <b-container fluid>
              <b-row>
                <b-col cols="3" style="text-align:center">
                  <img
                    style="width: 80px; height: 80px; border-radius: 15px;"
                    v-if="!item.user_image"
                    src="../../assets/blank-profile-picture-973460_1280.png"/>
                  <img
                    style="width: 80px; height: 80px; border-radius: 15px;"
                    id="imageUploads"
                    class="imgUpload"
                    v-if="item.user_image"
                    :src="'http://localhost:3000/users/' + item.user_image"
                /></b-col>
                <b-col>
                  <br />
                  {{ item.user_name }} <br />
                  {{ item.user_email }}
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-modal>
        <b-dropdown-item href="#" variant="primary"
          ><b-icon icon="question-circle" class="mr-2 c-blue"></b-icon>Telegram
          faq</b-dropdown-item
        >
        <b-dropdown-item @click.prevent="logouts()" variant="primary"
          ><b-icon icon="box-arrow-left" class="mr-2 c-blue"></b-icon
          >Logout</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="flexs mb-5">
      <div class="search py-2 px-3 mr-2 flexs">
        <b-icon icon="search" class="mr-2"></b-icon>
        <b-form-input placeholder="Type your message"></b-form-input>
      </div>
      <b-button><img src="../../assets/icon/Plus.png" alt=""/></b-button>
    </div>
    <div class="rooms flexs">
      <div class="room flex2">
        <img src="../../assets/icon/photo1.png" alt="" />
        <div>
          <div>
            Theressa
          </div>
          <div class="f-light">
            Why did you do chat?
          </div>
        </div>
      </div>
      <div class="righted">
        <div class="f-light">15.20</div>
        <div class="notif f-light">2</div>
      </div>
    </div>
    <div class="rooms flexs">
      <div class="room flex2">
        <img src="../../assets/icon/photo2.png" alt="" />
        <div>
          <div>
            Calvin
          </div>
          <div class="f-light">
            How are you today?
          </div>
        </div>
      </div>
      <div class="righted">
        <div class="f-light">15.20</div>
        <div class="notif f-light">6</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
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
.navbar {
  padding: 20px 0px;
}
.main {
  padding: 0px 0px 0px 30px;
  height: 100vh;
}
.f-large {
  font-size: 1.8em;
}
input {
  border: none;
  background-color: whitesmoke;
}
.search {
  background-color: whitesmoke;
  border-radius: 10px;
}
button {
  background-color: white !important;
  border: none;
  padding: 0px 0px;
}
.rooms {
  margin-top: 20px;
  margin-bottom: 20px;
}
.room img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
}
.notif {
  background-color: #7e98df;
  color: white;
  text-align: center;
  margin-left: auto;
  border-radius: 50%;
  width: 22px;
  height: 22px;
}
</style>
