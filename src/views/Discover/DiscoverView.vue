<template>
  <div v-for="(item, index) in posts" :key="index" style="margin-bottom: 1%">
    <v-card width="100%">
      <v-card-actions :style="{ justifyContent: 'right' }">
        <v-btn color="orange"> Comments </v-btn>
      </v-card-actions>
      <template v-slot:title>
        <v-avatar class="mr-3 mb-3" size="50" rounded="5">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
        </v-avatar>
        <span>@{{ item.user.username }}</span>
      </template>

      <template v-slot:subtitle>
        {{ item.title }}
      </template>

      <template v-slot:text> {{ item.body }} </template>
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
import { getAllPosts } from "@/services/Post.service";
import AddPostModal from "@/components/AddPostModal/AddPostModal.vue";
export default {
  data: () => ({
    selected: [],
    posts: [],
    page_size: 10,
    count: 10,
    page: 1,
    total_page: 0,
    currentRoot: "Posts",
  }),
  methods: {
    getAll() {
      getAllPosts(this.page).then((res) => {
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
