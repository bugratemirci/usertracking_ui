<template>
  <v-sheet class="d-flex flex-wrap" style="height: 100vh">
    <div class="flex-1-0 ma-2 pa-2 flex-fill containerLeft"></div>
    <v-divider vertical color="blue" thickness="2"></v-divider>
    <v-sheet class="flex-1-0 ma-2 pa-15 align-center">
      <v-text-field label="Name" v-model="user.name"></v-text-field>
      <v-text-field type="email" label="Email" v-model="user.email"></v-text-field>
      <v-text-field
        type="password"
        label="Password"
        v-model="user.password"
      ></v-text-field>
      <v-text-field label="Username" v-model="user.username"></v-text-field>
      <v-text-field type="phone" label="Phone" v-model="user.phone"></v-text-field>

      <v-btn elevated class="mr-2" color="blue" @click="onClick"> Register </v-btn>
      <v-btn elevated :to="{ name: 'Login' }" color="purple"> Go to login </v-btn>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { register } from "@/services/User.service";
import User from "@/models/User.model";

export default {
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    onClick() {
      register(this.user).then((res) => {
        console.log(res.data);
      });
    },
  },
  created() {},
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.containerRight {
  display: flex;
  width: 20%;
  justify-content: center;
}
.containerLeft {
  background-image: url("https://n2mobil.com/wp-content/uploads/2023/03/N2Mobil-Logotype.png");
  background-size: contain;
  background-position: center;
  width: 50%;
}
</style>
