<template>
  <v-container>
    <v-row class="justify-center">
      <v-card variant="tonal" v-for="(item, index) in 12" :key="item" class="mr-4 mb-4">
        <v-row style="width: 350px; margin: 0px" v-on:click="console.log(index)">
          <v-col v-for="(n, index) in pics" :key="n" md="6">
            <v-img :src="`${n}`" :lazy-src="`${n}`" aspect-ratio="1" cover :width="160">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {
  data: () => ({
    pics: [
      "https://picsum.photos/500/300?image=37",
      "https://picsum.photos/500/300?image=15",
      "https://picsum.photos/500/300?image=12",
      "https://picsum.photos/500/300?image=7",
    ],
  }),
  created() {},
};
</script>
