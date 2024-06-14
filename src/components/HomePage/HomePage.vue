<template>
  <div class="relative">
    <img class="opacity-60" src="../../assets/images/banner.png" />
    <div class="absolute top-[15%] left-[20%]">
      <p
        class="text-6xl capitalize mb-4 font-semibold tracking-wider w-[30rem]">
        Grow Your Car Rental Business
      </p>
      <p class="text-2xl w-[35rem] mb-5">
        Increase efficiency and improve your customer experience with HQ Rental
        Software.
      </p>
      <div class="flex gap-3">
        <input
          type="text"
          class="rounded-md outline-none border-2 border-solid border-black py-2 px-5"
          placeholder="PICK YOUR LOCATION" />
        <input
          type="date"
          class="rounded-md outline-none border-2 border-solid border-black py-2 px-5" />
        <input
          type="date"
          class="rounded-md outline-none border-2 border-solid border-black py-2 px-5" />
      </div>
      <button
        class="bg-black text-white px-10 py-2 rounded-md cursor-pointer mt-3">
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
