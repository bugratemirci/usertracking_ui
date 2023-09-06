<template>
  <router-view />
</template>

<script lang="ts" setup>
import { getUserById } from "@/services/User.service";
import { useUserStore } from "@/store/app";
const store = useUserStore();
getUserById(14).then((res) => {
  console.log(res.data);
  store.setProperties(res.data);
});
</script>
