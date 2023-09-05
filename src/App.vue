<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useAppStore } from "./store/app";

const appStore = useAppStore();

fetch("http://localhost:8000/configs/")
  .then((res) => res.json())
  .then((res) => {
    let config = res.results;
    const configObject: { [key: string]: string } = {};

    config.forEach((item: any) => {
      configObject[item.key] = item.value;
    });
    
    appStore.setProperties(configObject);
  });
</script>
