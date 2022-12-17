<script setup lang="ts">
import type Book from "@/types/Book";

const props = defineProps<{
  book: Book;
}>();
</script>
<template>
  <div class="book-list-item">
    <div class="book-cover">
      <img :src="book.cover" :alt="book.title" />
    </div>
    <div class="book-details">
      <a href="#" class="book-title">{{ book.title }}</a>
      <div class="book-author">{{ book.author }}</div>
      <div class="book-price">{{ book.price }}</div>
      <button class="btn btn-info add-to-cart">Add to cart</button>
    </div>
  </div>
</template>
<style scoped>
.book-list-item {
  display: flex;
  margin: 15px 0;
}

.book-list-item .book-cover {
  flex-shrink: 0;
  width: 120px;
  margin-right: 30px;
}

.book-list-item .book-cover img {
  max-width: 100%;
}

.book-list-item .book-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-start;
}

.book-list-item .book-details .book-title {
  font-size: 1.2rem;
}

.book-list-item .book-details .book-price {
  font-size: 1.4rem;
}
</style>
