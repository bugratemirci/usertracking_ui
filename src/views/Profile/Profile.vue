<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title> {{ user.name }} </v-card-title>

    <v-card-subtitle> {{ user.email }}</v-card-subtitle>

    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
      "
    >
      <v-icon color="#4F359B">mdi-phone</v-icon>
      <v-card-text>
        {{ user.phone }}
      </v-card-text>
    </div>
    <div
      v-if="user.address"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-bottom: 10px;
      "
    >
      <v-icon color="#4F359B">mdi-home</v-icon>
      <v-card-text>
        {{ user.address }}
      </v-card-text>
    </div>

    <v-bottom-sheet>
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-map"
          size="small"
          color="green"
          v-bind="props"
          class="addAddressButton"
        ></v-btn>
      </template>
      <GoogleMap
        language="tr"
        api-key=""
        @change-address="changeAddress"
      />
    </v-bottom-sheet>
  </v-card>
</template>
<script lang="ts">
import User from "@/models/User.model";
import Address from "@/models/Address.model";
import { getUserById } from "@/services/User.service";
import GoogleMap from "vue-google-maps-ui";
export default {
  data() {
    return { show: true, user: new User(), userId: "", myaddress: new Address() };
  },
  props: {},
  mounted() {
    this.userId = this.$route.params.userId;
    getUserById(this.userId).then((res) => {
      this.user = res.data;
    });
  },
  methods: {
    changeAddress(address) {
      this.myaddress.street = address.info.address_components[1].long_name;
      this.myaddress.zipcode = address.info.address_components[6].long_name;
      this.myaddress.city = address.info.address_components[3].long_name;
      this.myaddress.geo = {
        lat: address.info.geometry.viewport.Ga.lo,
        lng: address.info.geometry.viewport.Ga.hi,
      };
    },
  },
  components: { GoogleMap },
};
</script>

<style>
.addAddressButton {
  position: absolute;
  right: 3%;
  bottom: 3%;
}
</style>
