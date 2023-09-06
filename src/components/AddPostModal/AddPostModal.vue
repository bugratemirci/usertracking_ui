<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
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

      <v-card>
        <v-sheet width="300" class="mx-auto">
          <v-form>
            <v-text-field v-model="post.title" label="Post Title"></v-text-field>
          </v-form>
        </v-sheet>
        <v-sheet width="300" class="mx-auto">
          <v-form>
            <v-text-field v-model="post.body" label="Post Body"></v-text-field>
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
import Post from "@/models/Post.model.ts";
import { addPost } from "@/services/Post.service";
import { useUserStore } from "@/store/app";
const userStore = useUserStore();
export default {
  data() {
    return {
      dialog: false,
      post: new Post(),
    };
  },
  methods: {
    save() {
      const userId = userStore.$state.user.id;
      addPost(userId, this.post).then((res) => {
        console.log(res.data);
      });
    },
    onClose() {
      this.post = new Post();
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
