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
<script>
export default {
  data: () => ({
    selected: [],
    todos: [],
    page_size: 10,
    count: 10,
    total_page: 0,
    page: 1,
  }),
  methods: {
    getAll() {
      fetch("http://localhost:8000/todos/?page=" + this.page)
        .then((response) => response.json())
        .then((json) => {
          this.todos = json.results;
          this.page_size = json.page_size;
          this.count = json.count;
          this.total_page = json.total_pages;
        });
    },
  },
  created() {
    this.getAll();
  },
  components: {},
};
</script>
