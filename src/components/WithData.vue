<script setup lang="ts">
import { computed, onMounted } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const props = defineProps<{
  getData: () => void;
  isLoading: boolean;
  isError: boolean;
}>();

const hasData = computed(() => !props.isLoading && !props.isError);

onMounted(() => {
  props.getData();
});
</script>
<template>
  <Spinner :is-loading="props.isLoading" />
  <Error :is-error="props.isError" />

  <slot v-if="hasData"></slot>
</template>
<style scoped></style>
