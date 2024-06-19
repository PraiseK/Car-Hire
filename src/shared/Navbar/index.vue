<template>
  <div class="bg-gray-200">
    <div class="flex justify-between container mx-auto py-2">
      <div class="flex items-center">
        <img src="../../assets/images/logo.png" width="100" alt="logo" />
        <div class="font-bold text-xl ml-2">
          Sikuta <br />
          Australia
        </div>
      </div>
      <div class="flex gap-3 items-center font-semibold">
        <router-link to="/home" class="hover:text-[#dc143c]">HOME</router-link>
        <span>|</span>
        <router-link to="/about" class="hover:text-[#dc143c]">ABOUT US</router-link>
        <router-link to="/manage-booking" class="hover:text-[#dc143c]">MANAGE BOOKING</router-link>
        <div
          class="bg-[#dc143c] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#902c40]"
          @click="navigateRouter('/login')"
        >
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
