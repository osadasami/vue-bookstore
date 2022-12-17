<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="container">
    <Header :items-count="3" :total="100" />
    <RouterView />
  </div>
</template>
