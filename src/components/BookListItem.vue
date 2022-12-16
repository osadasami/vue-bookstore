<script setup lang="ts">
import type Book from "@/types/Book";

const props = defineProps<{
  book: Book;
}>();
</script>
<template>
  <div>
    <div>{{ props.book.title }}</div>
    <div>{{ props.book.author }}</div>
    <img :src="props.book.cover" :alt="props.book.title" />
  </div>
</template>
<style scoped></style>
