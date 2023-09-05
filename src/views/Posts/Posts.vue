<template>
  <div v-for="(item, index) in posts" :key="index" style="margin-bottom: 1%">
    <v-card width="100%" :title="item.title" :text="item.body"></v-card>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="total_page"
      @update:model-value="getAll"
    ></v-pagination>
  </div>
</template>
<script lang="ts">
export default {
  data: () => ({
    selected: [],
    posts: [],
    page_size: 10,
    count: 10,
    page: 1,
    total_page: 0,
  }),
  methods: {
    getAll() {
      fetch("http://localhost:8000/posts/?page=" + this.page)
        .then((response) => response.json())
        .then((json) => {
          this.posts = json.results;
          this.page_size = json.page_size;
          this.count = json.count;
          this.total_page = json.total_pages;
          console.log(this.total_page);
        });
    },
  },
  created() {
    this.getAll();
  },
  components: {},
};
</script>
