// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    projectRootPath: {},
  }),

  getters: {
    getConfigs: (state) => state,
  },
  actions: {
    setProperties(config: any) {
      this.projectRootPath = config;
    },
  },
});
