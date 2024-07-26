<template>
  <div class="flex justify-center mt-10 text-xl font-bold rounded">
    <p class="p-5 border-4 border-gray-300 border-solid w-max">
      Login to Car Hire Management
    </p>
  </div>
  <div class="m-10">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
