<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Add Todo </v-btn>
      </template>

      <v-card>
        <v-sheet width="300" class="mx-auto">
          <v-form>
            <v-text-field v-model="todoName" label="Todo"></v-text-field>
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
import Todo from "@/models/Todo.model.ts";

export default {
  data() {
    return {
      dialog: false,
      todo: new Todo(),
      todoName: "",
    };
  },
  methods: {
    save() {
      this.todo.name = this.todoName;
    },
    onClose() {
      this.todo = "";
      this.dialog = false;
    },
  },
};
</script>
