// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login/Login.vue"),
      },
      {
        path: "/todos",
        name: "Todos",
        component: () => import("@/views/Todo/Todo.vue"),
      },
      {
        path: "/albums",
        name: "Albums",
        component: () => import("@/views/Album/Album.vue"),
      },
      {
        path: "/posts",
        name: "Posts",
        component: () => import("@/views/Posts/Posts.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
