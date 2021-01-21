import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Maps from "../views/Maps.vue";
import Chat from "../views/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat
  },
  {
    path: "/chatpage",
    name: "ChatPage",
    component: () => import("../views/ChatPage.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/loginpage",
    name: "LoginPage",
    component: () => import("../views/auth/LoginPage.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue")
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: () => import("../views/auth/ResetPassword.vue")
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: () => import("../views/auth/ForgotPassword.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
