import BooksService from "@/services/BooksService";
import type Book from "@/types/Book";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const useBookStore = defineStore("books", () => {
  const booksService = new BooksService();
  const books: Ref<Book[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);

  const fetchBooks = async () => {
    isLoading.value = true;
    const data = await booksService.getBooks();
    books.value = data;
    isLoading.value = false;
  };

  return { books, fetchBooks, isLoading };
});

export default useBookStore;
