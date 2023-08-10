import { defineStore } from "pinia";
import { ref } from "vue";

export const useExampleStore = defineStore("example", () => {
  const name = ref("哈哈");

  return {
    name,
  };
});
