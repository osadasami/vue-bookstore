<script setup lang="ts">
import type Book from "@/types/Book";
import BookListItem from "./BookListItem.vue";

const props = defineProps<{
  books: Book[];
}>();
</script>
<template>
  <BookListItem v-for="book in props.books" :book="book" />
</template>
<style scoped></style>
