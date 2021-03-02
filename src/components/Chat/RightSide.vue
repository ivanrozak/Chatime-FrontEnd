<template>
  <div class="main">
    <!-- <div class="blank f-light">
      Please select a chat to start messaging
    </div> -->
    <div class="chat-content">
      <div class="header px-3 py-3">
        <div class="flex2">
          <img class="mr-2" src="../../assets/icon/photo1.png" alt="" />
          <div>
            <div>
              Tiara
            </div>
            <div class="f-light">
              online
            </div>
          </div>
        </div>
        <div>
          <b-button v-b-toggle.sidebar-right variant="none">
            <img src="../../assets/icon/Profile menu.png" alt=""
          /></b-button>
          <b-sidebar id="sidebar-right" :title="name" right shadow>
            <div class="px-3 py-2">
              <div class="centered">
                <img src="../../assets/icon/photo1.png" alt="" />
              </div>
              <div class="flexs">
                <div class="my-4">
                  <h5>Tiara</h5>
                  <div class="f-light">Online</div>
                </div>
                <img src="../../assets/icon/Chat.png" alt="" />
              </div>
              <div class="mb-3">
                <h6>Phone number</h6>
                <div class="f-light">+62 238374623948</div>
              </div>
              <hr />
              <b-tabs content-class="mt-3" pills fill>
                <b-tab title="Location" active>
                  <GmapMap
                    :center="coordinate"
                    :zoom="10"
                    map-type-id="terrain"
                    style="height: 150px"
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
                </b-tab>
                <b-tab class="img-content" title="Image">
                  <img src="../../assets/icon/pic1.png" alt="" />
                  <img src="../../assets/icon/pic3.png" alt="" />
                  <img src="../../assets/icon/pic2.png" alt="" />
                  <img src="../../assets/icon/pic3.png" alt="" />
                  <img src="../../assets/icon/pic2.png" alt="" />
                  <img src="../../assets/icon/pic1.png" alt="" />
                </b-tab>
              </b-tabs>
            </div>
          </b-sidebar>
        </div>
      </div>
      <div class="content px-3 py-3">
        <div class="self-chat mb-2 flex2">
          <img src="../../assets/icon/photo1.png" alt="" />
          <div class="text1 px-3 py-2 ml-3 f-light">
            Hey you there, miss youu :)
          </div>
        </div>
        <div class="friend-chat mb-2">
          <div class="text2 px-3 py-2 mr-3 ml-auto f-light">
            Me toooo
          </div>
          <img src="../../assets/icon/photo2.png" alt="" />
        </div>
      </div>
      <div class="white pl-3 pr-5 py-3">
        <div class="chat-text flexs c-blue py-2">
          <b-form-input placeholder="Type your message"></b-form-input>
          <b-icon class="ml-3 click mr-3" icon="plus"></b-icon>
          <b-icon class="mr-3 click" icon="emoji-smile-fill"></b-icon>
          <b-icon class="mr-1 click" icon="cursor-fill"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinate: {
        lat: 10,
        lng: 10
      },
      name: "tbisfir@gmail.com"
    };
  }
};
</script>

<style scoped>
.main {
  height: 100vh;
  background-color: whitesmoke;
  border-left: 3px solid whitesmoke;
}
.blank {
  display: flex;
  justify-content: center;
  padding-top: 300px;
}
.header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  overflow: auto;
}
input {
  border: none;
  background-color: whitesmoke;
}
.chat-text {
  background-color: whitesmoke;
  padding: 0px 20px 0px 10px;
  border-radius: 10px;
}
.white {
  position: absolute;
  top: 100vh;
  width: 100%;
  transform: translateY(-100%);
  background-color: white;
}
.self-chat {
  text-align: left;
}
.self-chat img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.text1 {
  background-color: #7e98df;
  color: white;
  border-radius: 10px 10px 10px 0px;
}
.friend-chat {
  display: flex;
}
.friend-chat img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.text2 {
  background-color: #7e98df;
  color: white;
  border-radius: 10px 10px 0px 10px;
}
.click {
  cursor: pointer;
}
h5 {
  margin-bottom: 0px;
}
.centered img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
.img-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.img-content img {
  width: 85px;
  height: 85px;
  margin-bottom: 15px;
}
</style>
