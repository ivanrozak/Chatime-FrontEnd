<template>
  <div>
    <b-row>
      <b-col cols="4" class="left">
        <b-navbar>
          <b-navbar-brand class="base-c"
            ><strong>Telegram</strong></b-navbar-brand
          >
          <b-dropdown right variant="bg-transparent" class="ml-auto"
            ><template slot="button-content"
              ><b-icon class="base-c" icon="text-left"></b-icon
            ></template>

            <b-dropdown-item href="#" variant="primary"
              ><b-icon icon="gear-fill" class="mr-2 base-c"></b-icon>
              Settings</b-dropdown-item
            >
            <b-dropdown-item href="#" variant="primary"
              ><b-icon icon="person" class="mr-2 base-c"></b-icon
              >Contacts</b-dropdown-item
            >
            <b-dropdown-item href="#" variant="primary"
              ><b-icon icon="person-plus" class="mr-2 base-c"></b-icon>Invite
              friends</b-dropdown-item
            >
            <b-dropdown-item href="#" variant="primary"
              ><b-icon icon="question-circle" class="mr-2 base-c"></b-icon
              >Telegram faq</b-dropdown-item
            >
            <b-dropdown-item href="#" variant="primary"
              ><b-icon icon="box-arrow-left" class="mr-2 base-c"></b-icon
              >Logout</b-dropdown-item
            >
          </b-dropdown>
        </b-navbar>
        <div class="nav-2">
          <div class="search">
            <b-icon icon="search" class="mr-2"></b-icon>
            <input type="text" placeholder="Type your message.." />
          </div>
          <button class="btn-plus"><b-icon icon="plus"></b-icon></button>
        </div>
        <hr />
        <div class="list-chat">
          <div class="chat-room">
            <img
              class="avatar"
              src="../assets/celanachino_cupachino_denissopandi_38_900x.jpg"
            />
            <div class="chat-room-content">
              <h6><strong>Nama Room</strong></h6>
              <p><small>isi chat</small></p>
            </div>
            <div class="time">
              <p><small>24:00</small></p>
              <p class="notif-small"><small>1</small></p>
            </div>
          </div>
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

<style scoped>
.left {
  /* border-right: 2px solid rgb(194, 193, 193); */
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
