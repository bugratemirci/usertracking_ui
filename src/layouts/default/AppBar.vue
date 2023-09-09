<template>
  <v-layout>
    <v-navigation-drawer :width="325">
      <v-list>
        <v-list-item
          :prepend-avatar="projectRootPath + profilePhotoPath"
          :title="username"
          :subtitle="email"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-check"
          title="Todos"
          value="todos"
          :to="{ name: 'Todos' }"
        >
          <template v-slot:prepend>
            <v-icon color="#4F359B"></v-icon>
          </template>
          <template v-slot:title>
            <span style="color: gray">Todos</span>
          </template>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-image-album"
          title="Photos"
          value="photos"
          :to="{ name: 'Photos' }"
        >
          <template v-slot:prepend> <v-icon color="#4F359B"></v-icon> </template>
          <template v-slot:title>
            <span style="color: gray">Photos</span>
          </template></v-list-item
        >
        <v-list-item
          prepend-icon="mdi-image-multiple"
          title="Albums"
          value="albums"
          :to="{ name: 'Albums' }"
        >
          <template v-slot:prepend> <v-icon color="#4F359B"></v-icon> </template>
          <template v-slot:title>
            <span style="color: gray">Albums</span>
          </template></v-list-item
        >
        <v-list-item
          prepend-icon="mdi-post"
          title="Posts"
          value="posts"
          :to="{ name: 'Posts' }"
        >
          <template v-slot:prepend> <v-icon color="#4F359B"></v-icon> </template>
          <template v-slot:title>
            <span style="color: gray">Posts</span>
          </template>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Users"
          value="users"
          :to="{ name: 'Users' }"
        >
          <template v-slot:prepend> <v-icon color="#4F359B"></v-icon> </template>
          <template v-slot:title>
            <span style="color: gray">Users</span>
          </template>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-post"
          title="Discover"
          value="discover"
          :to="{ path: 'discover' }"
        >
          <template v-slot:prepend> <v-icon color="#4F359B"></v-icon> </template>
          <template v-slot:title>
            <span style="color: gray">Discover</span>
          </template>
        </v-list-item>
      </v-list>

      <div class="fixedBottom">
        <div>
          <v-divider></v-divider>
        </div>
        <div class="row">
          <img style="width: 50px; margin-right: 2%" src="src\assets\images\n2logo.png" />
          <span style="font-weight: 800; color: #5c6672">N2Mobil</span>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main><default-view /></v-main>
  </v-layout>
</template>

<script lang="ts">
import DefaultView from "./View.vue";
import { useUserStore } from "@/store/app";

export default {
  data() {
    return {
      projectRootPath: "",
      userTestFolderName: "",
      profilePhotoPath: "",
      username: "",
      email: "",
    };
  },
  components: {
    DefaultView,
  },
  mounted() {
    const store = useUserStore();

    this.userTestFolderName = "biygraa1693945348476074/";
    this.profilePhotoPath = store.$state.user.profile_photo_path || "";
    this.username = store.$state.user.username || "";
    this.email = store.$state.user.email || "";
    this.projectRootPath =
      import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX +
      import.meta.env.VITE_USERS_PATH_PREFIX;
  },
};
</script>

<style>
.fixedBottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.row {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5%;
}
</style>
