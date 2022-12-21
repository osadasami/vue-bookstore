<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import useOrderStore from "./stores/order";

const orderStore = useOrderStore();
</script>

<template>
  <div class="container">
    <Header :items-count="orderStore.count" :total="orderStore.total" />
    <RouterView />
  </div>
</template>
