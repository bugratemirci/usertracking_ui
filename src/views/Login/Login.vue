<template>
  <v-sheet class="d-flex flex-wrap" style="height: 100vh">
    <div class="flex-1-0 ma-2 pa-2 flex-fill containerLeft"></div>
    <v-divider vertical color="blue" thickness="2"></v-divider>
    <v-sheet class="flex-1-0 ma-2 pa-15 align-center">
      <v-text-field label="Username" v-model="username"></v-text-field>
      <v-text-field type="password" label="Password" v-model="password"></v-text-field>

      <v-btn elevated @click="onClick" class="mr-2" color="blue"> Login </v-btn>
      <v-btn elevated :to="{ name: 'Register' }" color="purple"> Register </v-btn>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import axios from "axios";
import { useUserStore } from "@/store/app";
const store = useUserStore();
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onClick() {
      axios
        .post("http://localhost:8000/users/login/", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.token);
          store.setProperties(res.data.user);
          this.$router.push({ name: "Todos" });
        });
    },
  },
  created() {
    this.$router.push({ name: "Todos" });
  },
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
