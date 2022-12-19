<script setup lang="ts">
const props = defineProps<{
  isLoading: boolean;
}>();
</script>
<template>
  <div v-if="props.isLoading">Loading…</div>
</template>
<style scoped></style>
