import BooksService from "@/services/BooksService";
import type Book from "@/types/Book";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const useBookStore = defineStore("books", () => {
  const booksService = new BooksService();
  const books: Ref<Book[]> = ref([]);

  const fetchBooks = async () => {
    const data = await booksService.getBooks();
    books.value = data;
  };

  return { books, fetchBooks };
});

export default useBookStore;
