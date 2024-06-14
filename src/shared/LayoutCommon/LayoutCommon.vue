<template>
  <navbar></navbar>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import Navbar from "../Navbar/index.vue";
</script>

<style lang="scss" scoped></style>
