<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      page: 1,
      pageCount: 10,
    };
  },
};
</script>
