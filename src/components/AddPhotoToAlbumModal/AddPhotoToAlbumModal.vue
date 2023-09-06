<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa-4">
        <v-row>
          <v-col v-for="n in photo" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="projectRootPath + '/' + n.url"
              :lazy-src="projectRootPath + '/' + n.url"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
              @click="save(n.id)"
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
        <v-card-actions>
          <v-btn color="primary" block @click="changeVisibility(false)"
            >Close Dialog</v-btn
          >
        </v-card-actions>
        <v-alert type="success" closable v-model="alert" text="Success"></v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Photo from "@/models/Photo.model";
import { getPhotosByUser } from "@/services/Photo.service";
import { addPhotoToAlbum } from "@/services/Album.service";

export default {
  data() {
    return {
      photo: [],
      projectRootPath: "",
      alert: false,
    };
  },
  props: {
    isVisible: Boolean,
    selectedAlbumId: Number,
    userId: Number,
  },
  emits: ["update:modelValue"],
  methods: {
    save(photoId: number) {
      addPhotoToAlbum(photoId, this.selectedAlbumId).then((res) => {
        this.alert = true;
      });
    },
    onClose() {
      this.photo = [];
    },
    changeVisibility(isVisible) {
      this.$emit("update:isVisible", isVisible);
    },
  },
  beforeUpdate() {
    this.dialog = this.isVisible;
    this.projectRootPath = import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX + "users/";
    if (this.dialog) {
      getPhotosByUser(this.userId).then((res) => {
        this.photo = res.data;
      });
    }
  },
};
</script>

<style></style>
