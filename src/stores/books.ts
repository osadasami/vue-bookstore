import { defineStore } from "pinia";
import { ref } from "vue";

const useBookStore = defineStore("books", () => {
  const books = ref([]);

  return books;
});
