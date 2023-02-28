<template>
  <svg width="40" height="40">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  prefix?: string;
  name: string;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  prefix: "icon",
  name: "",
  color: "",
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style></style>
