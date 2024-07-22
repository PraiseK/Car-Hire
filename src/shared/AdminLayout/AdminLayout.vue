<template>
  <header-admin />
  <div class="m-10">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup>
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin.vue";
</script>

<style lang="scss" scoped></style>
