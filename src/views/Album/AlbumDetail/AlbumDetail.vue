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
        @click="deletePhotoFromAlbum(n.id)"
      ></v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { getPhotosByAlbum } from "@/services/Photo.service.ts";
import { deletePhotoFromAlbum } from "@/services/Album.service.ts";

export default {
  data: () => ({ photos: [] }),
  created() {
    console.log(this.$route.params);

    getPhotosByAlbum(this.$route.params.albumId).then((res) => {
      this.photos = res.data;
    });
    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX + "/users";
  },
  components: {},
  methods: {
    deletePhotoFromAlbum(photoId: number) {
      deletePhotoFromAlbum(photoId, this.$route.params.albumId).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
