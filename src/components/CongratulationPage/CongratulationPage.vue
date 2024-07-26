<template>
  <div class="grid h-screen px-4 bg-white place-content-center">
    <div class="text-center">
      <h1 class="font-black text-green-400 text-9xl">Successfully!</h1>

      <p class="mt-4 text-gray-500">Your booking number #{{ bookingRef }}</p>

      <a
        href="/"
        class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#cb6479] rounded hover:bg-[#cf7d8e] focus:outline-none focus:ring">
        Go Back Home
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const bookingRef = ref();

onMounted(() => {
  bookingRef.value = route.query.ref;
});
</script>

<style lang="scss" scoped></style>
