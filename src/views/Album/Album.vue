<template>
  <v-container>
    <v-row>
      <v-card
        variant="tonal"
        v-for="item in albums"
        :key="item"
        class="mr-4 mb-4 bg-purple-lighten-2 pa-2"
      >
        <v-chip class="ma-2" color="black" label>
          <v-icon start color="white" icon="mdi-label"></v-icon>
          <span style="color: white">{{ item.title }}</span>
        </v-chip>
        <v-row style="width: 350px; margin: 0px">
          <v-col v-for="(n, index) in item.photos.slice(0, 4)" :key="index" md="6">
            <v-img
              :src="`${projectRootPath + '/users/' + n.url}`"
              :lazy-src="`${n.thumbnail_url}`"
              aspect-ratio="1"
              cover
              :width="160"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col v-if="item.photos == null || item.photos.length == 0" md="12">
            <v-img
              :src="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
              :lazy-src="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
              aspect-ratio="1"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>

        <v-btn
          icon="mdi-plus"
          size="small"
          color="red"
          v-on:click="onClickAlbum(item.id)"
          class="addPhotoToAlbumButton"
        ></v-btn>
        <v-btn
          icon="mdi-skew-more"
          size="small"
          color="green"
          class="infoPhotoToAlbumButton"
          :to="{ path: 'albumdetail/' + item.id }"
        ></v-btn>
      </v-card>
    </v-row>
  </v-container>
  <AddAlbumModal v-model:userId="userId" />
  <AddPhotoToAlbumModal
    v-model:isVisible="isVisible"
    v-model:selectedAlbumId="selectedAlbumId"
    v-model:userId="userId"
  />
</template>
<script lang="ts">
import { getAlbumByUser } from "@/services/Album.service";
import AddAlbumModal from "@/components/AddAlbumModal/AddAlbumModal.vue";
import AddPhotoToAlbumModal from "@/components/AddPhotoToAlbumModal/AddPhotoToAlbumModal.vue";
import { useUserStore } from "@/store/app";
const userStore = useUserStore();
export default {
  data: () => ({
    projectRootPath: "",
    userTestFolderName: "",
    albums: [],
    isVisible: false,
    selectedAlbumId: 0,
    userId: 1,
  }),
  created() {
    this.userId = userStore.$state.user.id;
    getAlbumByUser(this.userId).then((res) => {
      this.albums = res.data;
    });

    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX;
  },
  components: { AddAlbumModal, AddPhotoToAlbumModal },
  methods: {
    onClickAlbum(albumId: number) {
      this.isVisible = true;
      this.selectedAlbumId = albumId;
    },
  },
};
</script>
<style>
.addPhotoToAlbumButton {
  position: absolute;
  right: 5%;
  bottom: 3%;
}
.infoPhotoToAlbumButton {
  position: absolute;
  right: 20%;
  bottom: 3%;
}
</style>
