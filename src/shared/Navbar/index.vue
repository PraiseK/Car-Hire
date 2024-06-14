<template>
  <div class="bg-gray-200">
    <div class="flex justify-between container mx-auto py-2">
      <div class="flex items-center">
        <img src="../../assets/images/logo.png" width="100" alt="logo" />
        <div class="font-bold text-xl">
          Sikuta <br />
          Australia
        </div>
      </div>
      <div class="flex gap-10 items-center font-semibold">
        <div
          class="cursor-pointer hover:text-red-500"
          @click="navigateRouter('/home')">
          Home
        </div>
        <div
          class="cursor-pointer hover:text-red-500"
          @click="navigateRouter('/about')">
          About Us
        </div>
        <div
          class="bg-black text-white p-4 rounded-md cursor-pointer hover:text-red-500">
          Login / Sign up
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateRouter = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped></style>
