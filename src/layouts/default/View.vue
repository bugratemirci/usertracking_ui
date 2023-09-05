<template>
  <div style="padding: 3%">
    <div>
      <v-btn prepend-icon="mdi-arrow-left-drop-circle-outline">
        <template v-slot:prepend>
          <v-icon color="purple"></v-icon>
        </template>

        Go Back
      </v-btn>
    </div>
    <div style="margin-top: 2%;"><router-view /></div>
  </div>
</template>

<script lang="ts" setup>
//
</script>
