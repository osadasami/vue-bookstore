<script setup lang="ts">
import BookList from "@/components/BookList.vue";
import Order from "@/components/Order.vue";
import WithData from "@/components/WithData.vue";
import useBookStore from "@/stores/books";

const bookStore = useBookStore();
</script>
<template>
  <div>
    <WithData
      :get-data="bookStore.fetchBooks"
      :is-error="bookStore.isError"
      :is-loading="bookStore.isLoading"
    >
      <BookList :books="bookStore.books" />
    </WithData>

    <Order />
  </div>
</template>
<style scoped></style>
