<template>
  <v-container>
    <v-row>
      <v-card
        variant="tonal"
        v-for="(item, index) in albums"
        :key="item"
        class="mr-4 mb-4"
      >
        <v-row style="width: 350px; margin: 0px" v-on:click="console.log(index)">
          <v-col v-for="(n, index) in item.photos" :key="index" md="6">
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
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { getAlbumByUser } from "@/services/Album.service";
export default {
  data: () => ({
    projectRootPath: "",
    userTestFolderName: "",
    albums: [],
  }),
  created() {
    getAlbumByUser(14).then((res) => {
      this.albums = res.data;
    });
    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX;
  },
};
</script>
