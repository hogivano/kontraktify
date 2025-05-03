import { defineStore } from "pinia";

export const useMainStore = defineStore("form", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increase() {
      this.count++;
    },
  },
});
