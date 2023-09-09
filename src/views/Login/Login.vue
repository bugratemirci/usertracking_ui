<template>
  <v-container>
    <v-text-field label="Username" v-model="username"></v-text-field>
    <v-text-field label="Password" v-model="password"></v-text-field>
    <v-btn elevated @click="onClick"> Button </v-btn>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import { heartbeat } from "@/services/User.service";
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

<style></style>
