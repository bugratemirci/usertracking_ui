<template>
  <div v-for="(item, index) in posts" :key="index" style="margin-bottom: 1%">
    <v-card width="100%">
      <v-card-actions :style="{ justifyContent: 'right' }">
        <v-btn @click="shows[index] = !shows[index]" color="orange"> Comments </v-btn>
      </v-card-actions>
      <v-card-actions :style="{ justifyContent: 'right' }">
        <v-btn @click="onClickAlbum(item.id)" color="orange"> Add Comment </v-btn>
      </v-card-actions>
      <template v-slot:title>
        <v-avatar class="mr-3 mb-3" size="50" rounded="5">
          <v-img :src="projectRootPath + item.user.profile_photo_path"></v-img>
        </v-avatar>
        <span>{{ item.user.username }}</span>
      </template>

      <template v-slot:subtitle>
        {{ item.title }}
      </template>

      <template v-slot:text> {{ item.body }} </template>
      <v-expand-transition>
        <div v-show="shows[index]">
          <v-divider></v-divider>
          <div
            v-for="(item, index) in item.comments"
            :key="index"
            style="
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              flex-basis: 0;
              flex-grow: 0;
            "
          >
            <v-col style="flex-grow: 0">
              <v-avatar size="40" rounded="5">
                <v-img :src="projectRootPath + item.user.profile_photo_path"></v-img>
              </v-avatar>
            </v-col>
            <v-col>
              <span style="font-weight: 500; font-size: medium">{{
                item.user.username
              }}</span>
              <br />
              <span style="font-size: small">{{ item.message }}</span>
            </v-col>
          </div>
        </div>
      </v-expand-transition>
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
  <AddCommentModal
    v-model:isVisible="isVisible"
    v-model:selectedPostId="selectedPostId"
  />
</template>
<script lang="ts">
import { getAllPosts } from "@/services/Post.service";
import AddPostModal from "@/components/AddPostModal/AddPostModal.vue";
import AddCommentModal from "@/components/AddCommentModal/AddCommentModal.vue";
export default {
  data: () => ({
    selected: [],
    posts: [],
    page_size: 10,
    count: 10,
    page: 1,
    total_page: 0,
    currentRoot: "Posts",
    shows: [],
    isVisible: false,
    selectedPostId: Number,
  }),
  methods: {
    getAll() {
      getAllPosts(this.page).then((res) => {
        this.posts = res.data.results;
        this.posts.forEach((post) => {
          this.shows.push(false);
        });
        this.total_page = res.data.total_pages;
      });
    },
    onClickAlbum(postId: number) {
      this.isVisible = true;
      this.selectedPostId = postId;
    },
  },
  created() {
    this.getAll();

    this.projectRootPath =
      import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX +
      import.meta.env.VITE_USERS_PATH_PREFIX;
  },

  components: { AddPostModal, AddCommentModal },
};
</script>
