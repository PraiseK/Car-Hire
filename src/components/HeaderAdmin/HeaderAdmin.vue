<template>
  <div class="bg-[#E5E7EB] flex gap-3 p-5">
    <div
      :class="
        (activeNav('/admin/dashboard')
          ? 'bg-[#DC143C] text-white'
          : 'bg-white') + ' p-3 font-semibold capitalize rounded cursor-pointer'
      "
      @click="navigateRouter('/admin/dashboard')">
      Dashboard
    </div>
    <div
      :class="
        (activeNav('/admin/booking') ? 'bg-[#DC143C] text-white' : 'bg-white') +
        ' p-3 font-semibold capitalize rounded cursor-pointer'
      "
      @click="navigateRouter('/admin/booking')">
      Booking Management
    </div>
    <div
      :class="
        (activeNav('/admin/car') ? 'bg-[#DC143C] text-white' : 'bg-white') +
        ' p-3 font-semibold capitalize rounded cursor-pointer'
      "
      @click="navigateRouter('/admin/car')">
      Car Management
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const navigateRouter = (pathName) => {
  router.push(pathName);
};
const activeNav = (pathName) => {
  console.log(route.path);
  return route.path === pathName;
};
</script>

<style lang="scss" scoped></style>
