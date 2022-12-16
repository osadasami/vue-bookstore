<script setup lang="ts">
import BookList from "@/components/BookList.vue";
import BooksService from "@/services/BooksService";
const booksService = new BooksService();
const books = booksService.getBooks();
</script>
<template>
  <div>
    <h1>Home</h1>
    <BookList :books="books" />
  </div>
</template>
<style scoped></style>
