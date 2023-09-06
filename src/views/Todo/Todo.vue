<template>
  <v-container>
    <template v-for="(item, index) in todos" :key="item">
      <v-checkbox v-model="item.completed" :label="item.title"></v-checkbox>
    </template>
  </v-container>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="total_page"
      @update:model-value="getAll"
    ></v-pagination>
  </div>
  <AddTodoModal />
</template>
<script lang="ts">
import { getTodosByUser } from "@/services/Todo.service";
import AddTodoModal from "@/components/AddTodoModal/AddTodoModal.vue";
import { useUserStore } from "@/store/app";
const store = useUserStore();
export default {
  data: () => ({
    selected: [],
    todos: [],
    page_size: 10,
    count: 10,
    total_page: 0,
    page: 1,
    userId: Number,
  }),
  methods: {
    getAll() {
      getTodosByUser(this.userId, this.page, this.page_size).then((res) => {
        this.todos = res.data.results;
        this.total_page = res.data.total_pages;
      });
    },
  },
  created() {
    this.userId = store.$state.user.id;
    this.getAll();
  },
  components: { AddTodoModal },
};
</script>
<style>
.pagination {
  position: fixed;
  right: 50%;
  bottom: 0%;
}
</style>
