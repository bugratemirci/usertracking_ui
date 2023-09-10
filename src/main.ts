/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { VInfiniteScroll } from "vuetify/labs/VInfiniteScroll";
import { VBottomSheet } from "vuetify/labs/VBottomSheet";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components: { VInfiniteScroll, VBottomSheet },
  directives,
});
const app = createApp(App).use(vuetify);
registerPlugins(app);

app.mount("#app");
