// Utilities
import { defineStore } from "pinia";
import User from "@/models/User.model";
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

export const useUserStore = defineStore("app", {
  state: () => ({
    user: new User(),
  }),

  getters: {
    getUsers: (state) => state,
  },
  actions: {
    setProperties(user: any) {
      this.user = user;
    },
  },
});
