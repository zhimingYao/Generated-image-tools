<script setup lang="ts">
import { globalStore } from "./store/global";

const store = globalStore();
console.log(store, "-----------store-----------");
</script>

<template>
  <svg-icon name="say" style="width: 100px; height: 100px" />
  <el-divider />
  
</template>

<style lang="scss" scoped></style>
