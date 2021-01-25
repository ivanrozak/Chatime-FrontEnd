import Vue from "vue";
import VueRouter from "vue-router";
import Maps from "../views/Maps.vue";
import Chat from "../views/Chat.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
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
    component: () => import("../views/ChatPage.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/",
    name: "LoginPage",
    component: () => import("../views/auth/LoginPage.vue"),
    meta: { requiresVisitor: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: "/chatpage"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
