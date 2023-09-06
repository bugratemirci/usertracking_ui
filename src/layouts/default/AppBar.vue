<template>
  <v-layout>
    <v-navigation-drawer :width="325">
      <v-list>
        <v-list-item
          :prepend-avatar="projectRootPath + profilePhotoPath"
          title="Buğrahan Temirci"
          subtitle="bugrahan.temirci@hotmail.com"
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
          prepend-icon="mdi-image-album"
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
      </v-list>
      <div class="fixedBottom">
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-img :width="50" src="src\assets\images\n2logo.png"></v-img>
            <span style="font-weight: 800; color: #5c6672">N2Mobil</span>
          </v-list-item>
        </v-list>
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
    };
  },
  components: {
    DefaultView,
  },
  created() {
    const store = useUserStore();

    this.userTestFolderName = "biygraa1693945348476074/";
    this.profilePhotoPath = store.$state.user.profile_photo_path || "";

    this.projectRootPath =
      import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX +
      import.meta.env.VITE_USERS_PATH_PREFIX;
  },
};
</script>

<style>
.fixedBottom {
  position: fixed !important;
  bottom: 0 !important;
  width: 100%;
}
</style>
