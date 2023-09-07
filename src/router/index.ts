import { createRouter, createWebHistory } from "vue-router";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  //todo: login request
  if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/todos",
        name: "Todos",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Todo/Todo.vue"),
      },
      {
        path: "/albums",
        name: "Albums",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Album/Album.vue"),
      },
      {
        path: "/posts",
        name: "Posts",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Posts/Posts.vue"),
      },
      {
        path: "/users",
        name: "Users",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Users/UsersView.vue"),
      },
      {
        path: "/photos",
        name: "Photos",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Photos/PhotosView.vue"),
      },
      {
        path: "/albumdetail/:albumId",
        name: "AlbumDetail",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Album/AlbumDetail/AlbumDetail.vue"),
      },
      {
        path: "/discover",
        name: "Discover",
        beforeEnter: guardMyroute,
        component: () => import("@/views/Discover/DiscoverView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
