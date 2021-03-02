<template>
  <div>
    <b-row>
      <b-col cols="4" class="left">
        <b-navbar>
          <b-navbar-brand class="base-c"
            ><strong>{{ user.user_email }}</strong></b-navbar-brand
          >
        </b-navbar>
        <div class="top-profile centered">
          <img :src="'http://localhost:3000/users/' + user.user_image" />
          <br />
          <input id="fileUpload" type="file" @change="handleFile" hidden />
          <button class="upload-img" @click.prevent="chooseFile">
            change image
          </button>
          <h6>
            <strong>{{ user.user_name }}</strong>
          </h6>
          <p>
            <small>{{ user.user_email }}</small>
          </p>
        </div>
        <h6><strong>Account</strong></h6>
        <label>contact</label>
        <b-form-input
          type="text"
          v-model="user.user_phone"
          placeholder="Your phone number"
        ></b-form-input>
        <label>Username</label>
        <b-form-input
          type="text"
          v-model="user.user_name"
          placeholder="Your name here"
        ></b-form-input>
        <label>Bio</label>
        <textarea
          class="w-100"
          rows="2"
          v-model="user.user_desc"
          placeholder="Masukkan deskripsi singkat"
        ></textarea>
        <label>My location</label>
        <GmapMap
          :center="coordinate"
          :zoom="10"
          map-type-id="terrain"
          style="margin-left: 10px; width: 400px; height: 150px"
        >
          <GmapMarker
            :position="coordinate"
            :clickable="true"
            :draggable="true"
            @click="clickMarker"
            icon="https://img.icons8.com/color/48/000000/map-pin.png
"
          />
        </GmapMap>
        <br />
        <div class="centered">
          <button class="upload-img" @click.prevent="updateProfile()">
            Update profile
          </button>
        </div>
      </b-col>
      <b-col class="right" cols="8">
        <div class="header">
          <img
            class="avatar"
            src="../assets/celanachino_cupachino_denissopandi_38_900x.jpg"
          />
          <div class="chat-room-content">
            <h6><strong>Nama Room</strong></h6>
            <p><small>isi chat</small></p>
          </div>
        </div>
        <div class="chat-content">
          <div class="send">
            <img
              class="avatar-sm"
              src="../assets/celanachino_cupachino_denissopandi_38_900x.jpg"
            />
            <div class="chat-text"><p>disini isi chatnya</p></div>
          </div>
          <div class="receive"></div>
        </div>
        <div class="chat-action">
          <div class="input">
            <input type="text" placeholder="Type your message.." />
            <b-icon class="icon-small" icon="plus"></b-icon>
            <b-icon class="icon-small" icon="emoji-smile-fill"></b-icon>
            <b-icon class="icon-small" icon="cursor-fill"></b-icon>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      coordinate: {
        lat: 10,
        lng: 10
      }
    };
  },
  created() {
    this.$getLocation()
      .then(coordinates => {
        this.coordinate = {
          lat: coordinates.lat,
          lng: coordinates.lng
        };
        console.log(coordinates);
      })
      .catch(error => {
        alert(error);
      });
  },
  mounted() {
    this.getUserByEmail();
  },
  computed: {
    ...mapGetters({ user: "setUser" })
  },
  methods: {
    ...mapGetters(["setUser"]),
    ...mapActions(["getUserByEmails", "updateProfileUsers"]),
    getUserByEmail() {
      this.getUserByEmails(this.user.user_email);
    },
    updateProfile() {
      const { user_name, user_phone, user_image, user_desc } = this.user;
      const data = new FormData();
      data.append("user_name", user_name);
      data.append("user_phone", user_phone);
      data.append("user_image", user_image);
      data.append("user_desc", user_desc);
      data.append("user_lat", this.coordinate.lat);
      data.append("user_lng", this.coordinate.lng);
      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      this.updateProfileUsers(data)
        .then(result => {
          alert(result.data.msg);
        })
        .catch(err => {
          alert(err.data.msg);
        });
    },
    handleFile(event) {
      console.log(event);
      this.user.user_image = event.target.files[0];
    },
    clickMarker(position) {
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng()
      };
    },
    chooseFile() {
      document.getElementById("fileUpload").click();
    }
  }
};
</script>
<style scoped>
.left {
  padding: 20px 40px;
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
.top-profile img {
  width: 80px;
  height: 80px;
  margin-right: 0px !important;
  margin-bottom: 5px;
  border-radius: 10px;
  margin-right: 10px;
}
.upload-img {
  margin-bottom: 10px;
  background-color: #7e98df;
  color: white;
  border-radius: 10px;
  padding: 0px 20px;
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
.centered {
  text-align: center;
}
</style>
