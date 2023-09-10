<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in users" :key="index" cols="3">
        <v-card class="mx-auto" max-width="300">
          <v-img
            :src="projectRootPath + item.profile_photo_path"
            height="500px"
            cover
          ></v-img>

          <v-card-title> {{ item.name || "Username" }} </v-card-title>

          <v-card-subtitle> {{ item.email }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="shows[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="shows[index] = !shows[index]"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="shows[index]">
              <v-divider></v-divider>
              <v-chip class="ma-2" color="purple" label text-color="white">
                <v-icon start icon="mdi-phone"></v-icon>
                {{ item.phone || "None" }}
              </v-chip>
              <v-divider></v-divider>
              <v-chip class="ma-2" color="green" label text-color="white">
                <v-icon start icon="mdi-mail"></v-icon>
                {{ item.email || "None" }}
              </v-chip>
              <v-divider></v-divider>
              <v-chip class="ma-2" color="blue" label text-color="white">
                <v-icon start icon="mdi-map"></v-icon>
                {{ item.address?.city || "None" }}
              </v-chip>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { getAnotherUsers } from "@/services/User.service";
import { useUserStore } from "@/store/app";
const userStore = useUserStore();
export default {
  data: () => ({
    shows: [],
    users: [],
    userId: Number,
    projectRootPath: "",
  }),
  created() {
    this.projectRootPath =
      import.meta.env.VITE_PROJECT_ROOT_PATH_PREFIX +
      import.meta.env.VITE_USERS_PATH_PREFIX;
    this.userId = userStore.$state.user.id;
    getAnotherUsers(this.userId).then((res) => {
      this.users = res.data;
      this.users.forEach((element) => {
        this.shows.push(false);
      });
    });
  },
};
</script>
