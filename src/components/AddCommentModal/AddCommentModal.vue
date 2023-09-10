<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa-4">
        <v-sheet width="100%" class="mx-auto">
          <v-form>
            <v-text-field v-model="message" label="Message"></v-text-field>
          </v-form>
        </v-sheet>
        <v-card-actions>
          <v-btn color="primary" block @click="save()">Save</v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-btn color="primary" block @click="changeVisibility(false)"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { addCommentToPost } from "@/services/Post.service";
import { useUserStore } from "@/store/app";

export default {
  data() {
    return {
      dialog: false,
      message: "",
    };
  },
  props: {
    isVisible: Boolean,
    selectedPostId: Number,
  },
  emits: ["update:modelValue"],
  beforeUpdate() {
    this.dialog = this.isVisible;
  },
  methods: {
    changeVisibility(isVisible) {
      this.$emit("update:isVisible", isVisible);
    },
    save() {
      const store = useUserStore();
      const userId = store.$state.user.id;
      addCommentToPost(userId, this.selectedPostId, this.message).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
