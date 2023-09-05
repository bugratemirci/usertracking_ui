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
          <v-col v-for="(n, index) in item.photos" :key="n" md="6">
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
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
export default {
  data: () => ({
    projectRootPath: "",
    userTestFolderName: "",
    albums: [],
  }),
  created() {
    this.projectRootPath = "http://192.168.1.33/";
    fetch("http://localhost:8000/albums/getalbumsbyuser/?user_id=14")
      .then((res) => res.json())
      .then((res) => {
        this.albums = res;
      });

    console.log(this.projectRootPath);
  },
};
</script>
