<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in users" :key="index" cols="2">
        <v-card class="mx-auto" max-width="500" min-height="350">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
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

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey, you add a
                one and two zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.
              </v-card-text>
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
  }),
  created() {
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
