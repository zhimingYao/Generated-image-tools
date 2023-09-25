<script setup lang="ts">
  import { globalStore } from './store/global';

  const store = globalStore();
  console.log(store, '-----------store-----------');
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
