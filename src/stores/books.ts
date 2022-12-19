import BooksService from "@/services/BooksService";
import type Book from "@/types/Book";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const useBookStore = defineStore("books", () => {
  const booksService = new BooksService();
  const books: Ref<Book[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);
  const isError: Ref<boolean> = ref(false);

  const fetchBooks = async () => {
    try {
      isLoading.value = true;
      isError.value = false;
      const data = await booksService.getBooks();
      books.value = data;
    } catch (err) {
      isError.value = true;
      books.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return { books, fetchBooks, isLoading, isError };
});

export default useBookStore;
