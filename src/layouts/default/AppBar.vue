<template>
  <v-layout>
    <v-navigation-drawer :width="325">
      <v-list>
        <v-list-item
          :prepend-avatar="
            projectRootPath + userTestFolderName + userTestProfilePhotoName
          "
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
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
export default {
  data() {
    return {
      projectRootPath: "",
      userTestFolderName: "",
      userTestProfilePhotoName: "",
    };
  },
  components: {
    DefaultView,
  },
  created() {
    this.projectRootPath = "http://192.168.1.33/";
    this.userTestFolderName = "users/biygraa1693945348476074/";
    this.userTestProfilePhotoName = "1682697983467.jpg";
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
