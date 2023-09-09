<template>
  <router-view />
</template>

<script lang="ts" setup>
import { heartbeat } from "@/services/User.service";
import { useUserStore } from "@/store/app";
const store = useUserStore();

heartbeat()
  .then((res) => {
    localStorage.setItem("access_token", res.data.token);
    store.setProperties(res.data.user);
  })
  .catch(() => {
    localStorage.removeItem("access_token");
  });
</script>
