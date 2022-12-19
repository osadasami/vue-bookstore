<script setup lang="ts">
import BookList from "@/components/BookList.vue";
import Error from "@/components/Error.vue";
import Order from "@/components/Order.vue";
import Spinner from "@/components/Spinner.vue";
import useBookStore from "@/stores/books";
import { computed, onMounted } from "vue";

const bookStore = useBookStore();
const books = computed(() => bookStore.books);
const isLoading = computed(() => bookStore.isLoading);
const isError = computed(() => bookStore.isError);

onMounted(() => {
  bookStore.fetchBooks();
});
</script>
<template>
  <div>
    <Spinner :is-loading="isLoading" />
    <Error :is-error="isError" />
    <BookList v-if="!isLoading" :books="books" />
    <Order />
  </div>
</template>
<style scoped></style>
