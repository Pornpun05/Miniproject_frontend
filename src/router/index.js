import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },

  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterPage.vue"),
  },

  {
    path: "/homePage",
    name: "homePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/review",
    name: "review",
    component: () => import("../views/ReviewPage.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../views/EditPage.vue"),
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../views/UpdatePage.vue"),
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: () => import("../views/AdminPage.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
