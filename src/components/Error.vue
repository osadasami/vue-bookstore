<script setup lang="ts">
const props = defineProps<{
  isError: boolean;
}>();
</script>
<template>
  <div v-if="props.isError">Error</div>
</template>
<style scoped></style>
