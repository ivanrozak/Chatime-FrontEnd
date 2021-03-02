<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/maps">Maps</router-link> |
      <router-link to="/chat">Chat</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
@font-face {
  font-family: "Rubik";
  src: url("./assets/font/static/Rubik-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Rubik-bold";
  src: url("./assets/font/static/Rubik-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Rubik-light";
  src: url("./assets/font/static/Rubik-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "Rubik";
}
.centered {
  text-align: center;
}
.righted {
  text-align: right;
}
.f-light {
  font-family: "Rubik-light";
}
.f-bold {
  font-family: "Rubik-bold";
}
.flexs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex2 {
  display: flex;
  align-items: center;
}
.flex3 {
  display: flex;
  justify-content: end;
}
.c-blue {
  color: #7e98df;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
