<script setup lang="ts">
import type Book from "@/types/Book";
import BookListItem from "./BookListItem.vue";

const props = defineProps<{
  books: Book[];
}>();
</script>
<template>
  <ul>
    <li v-for="book in props.books">
      <BookListItem :book="book" />
    </li>
  </ul>
</template>
<style scoped></style>
