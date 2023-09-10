<template>
  <v-row>
    <v-col v-for="n in photos" :key="n" class="d-flex child-flex" cols="3">
      <v-img
        :src="projectRootPath + '/' + n.url"
        :lazy-src="projectRootPath + '/' + n.url"
        aspect-ratio="1"
        :contain="true"
        class="bg-white"
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
      <v-btn
        icon="mdi-select-remove"
        size="small"
        color="red"
        @click="deletePhoto(n.id)"
      ></v-btn>
    </v-col>
  </v-row>
  <AddPhotoModal />
</template>
<script lang="ts">
import { getPhotosByUser, deletePhoto } from "@/services/Photo.service.ts";
import AddPhotoModal from "@/components/AddPhotoModal/AddPhotoModal.vue";
import { useUserStore } from "@/store/app";
const userStore = useUserStore();
export default {
  data: () => ({ photos: [] }),
  created() {
    const userId = userStore.$state.user.id;
    getPhotosByUser(userId).then((res) => {
      this.photos = res.data;
    });
    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX + "users/";
  },
  components: { AddPhotoModal },
  methods: {
    deletePhoto(photoId: number) {
      deletePhoto(photoId).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
