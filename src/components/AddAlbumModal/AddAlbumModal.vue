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
        <v-sheet width="100%" class="mx-auto">
          <v-form>
            <v-text-field v-model="album.title" label="Title"></v-text-field>
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
import Album from "@/models/Album.model.ts";
import { addAlbumByUser } from "@/services/Album.service";
export default {
  data() {
    return {
      dialog: false,
      album: new Album(),
    };
  },
  props: {
    userId: Number,
  },
  emits: ["update:modelValue"],
  methods: {
    save() {
      addAlbumByUser(this.userId, this.album).then((res) => {
        console.log(res.data);
      });
    },
    onClose() {
      this.photo = new Album();
      this.dialog = false;
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
