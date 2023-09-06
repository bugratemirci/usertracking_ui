<template>
  <div v-for="(item, index) in posts" :key="index" style="margin-bottom: 1%">
    <v-card width="100%" :title="item.title" :text="item.body">
      <v-card-actions :style="{ justifyContent: 'right' }">
        <v-btn color="orange"> See More </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="total_page"
      @update:model-value="getAll"
    ></v-pagination>
  </div>
  <AddPostModal />
</template>
<script lang="ts">
import { getPostsByUser } from "@/services/Post.service";
import AddPostModal from "@/components/AddPostModal/AddPostModal.vue";
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
      getPostsByUser(14, this.page, this.page_size).then((res) => {
        this.posts = res.data.results;
        this.total_page = res.data.total_pages;
      });
    },
  },
  created() {
    this.getAll();
  },
  components: { AddPostModal },
};
</script>
