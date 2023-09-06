<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-plus"
          size="large"
          color="green"
          v-bind="props"
          class="fixedbutton"
        >
        </v-btn>
      </template>

      <v-card class="pa-4">
        <v-file-input
          label="File input"
          variant="outlined"
          @change="onFileChanged"
        ></v-file-input>
        <v-sheet width="100%" class="mx-auto">
          <v-form>
            <v-text-field v-model="photo.title" label="Title"></v-text-field>
          </v-form>
        </v-sheet>
        <v-card-actions>
          <v-btn color="primary" block @click="onClose()">Close Dialog</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn color="primary" block @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Photo from "@/models/Photo.model.ts";
import { addPhotoByUser } from "@/services/Photo.service";
export default {
  data() {
    return {
      dialog: false,
      photo: new Photo(),
      selectedFile: null,
      a: String,
    };
  },
  methods: {
    save() {
      console.log(this.photo);

      addPhotoByUser(14, this.photo)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onClose() {
      this.photo = new Photo();
      this.dialog = false;
    },
    onFileChanged(e) {
      this.photo.file = e.target.files[0];
    },
  },
};
</script>

<style>
.fixedbutton {
  position: fixed;
  width: 600px;
  height: 200px;
  right: 1%;
  bottom: 1%;
}
</style>
