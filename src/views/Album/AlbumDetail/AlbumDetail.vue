<template>
  <v-row>
    <v-col v-for="n in photos" :key="n" class="d-flex child-flex" cols="3">
      <v-img
        :src="projectRootPath + '/' + n.url"
        :lazy-src="projectRootPath + '/' + n.url"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
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
</template>
<script lang="ts">
import { getPhotosByAlbum } from "@/services/Photo.service.ts";
export default {
  data: () => ({ photos: [] }),
  created() {
    console.log(this.$route.params);

    getPhotosByAlbum(this.$route.params.albumId).then((res) => {
      this.photos = res.data;
    });
    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX + '/users';
  },
  components: {},
  methods: {},
};
</script>
