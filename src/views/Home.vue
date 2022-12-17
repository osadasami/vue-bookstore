<script setup lang="ts">
import BookList from "@/components/BookList.vue";
import Order from "@/components/Order.vue";
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
    <BookList :books="books" />
    <Order />
  </div>
</template>
<style scoped></style>
