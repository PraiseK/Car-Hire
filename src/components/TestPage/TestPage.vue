<template>
  <div>
    <h1 class="text-5xl text-center">Test Page</h1>
    <div class="pt-8 flex flex-col items-center justify-center">
      <button
        class="bg-[#DC143C] text-white p-3 font-semibold capitalize rounded cursor-pointer item-center"
        @click="loadHtml"
      >
        Show Test Report
      </button>

      <iframe
        v-if="isReportVisible"
        src="https://praisek.github.io/Car-Hire/"
        frameborder="0"
        class="w-full h-screen border-0 pt-8"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isReportVisible = ref(false);

const loadHtml = () => {
  isReportVisible.value = !isReportVisible.value;

  console.log(isReportVisible.value);
};
</script>

<style lang="scss" scoped></style>
