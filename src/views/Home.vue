<script setup lang="ts">
import BookList from "@/components/BookList.vue";
import useBookStore from "@/stores/books";
import { computed, onMounted } from "vue";

const bookStore = useBookStore();
const books = computed(() => bookStore.books);

onMounted(() => {
  bookStore.fetchBooks();
});
</script>
<template>
  <div>
    <h1>Home</h1>
    <BookList :books="books" />
  </div>
</template>
<style scoped></style>
