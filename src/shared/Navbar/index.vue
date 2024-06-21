<template>
  <header
    class="sticky inset-0 z-50 border-b border-slate-100 bg-gray-200 backdrop-blur-lg"
  >
    <nav
      class="mx-auto flex max-w-7xl gap-4 transition-all duration-200 ease-in-out lg:px-12"
    >
      <div class="relative flex items-center">
        <a href="/">
          <img
            src="../../assets/images/logo.png"
            loading="lazy"
            style="color: transparent"
            width="100"
            height="40"
        /></a>
        <div class="font-bold text-xl">
          Sikuta <br />
          Australia
        </div>
      </div>

      <div class="flex-grow"></div>
      <ul class="hidden items-center justify-center gap-6 md:flex">
        <li
          class="font-dm text-sm font-medium text-slate-700 ease-in-out hover:scale-[1.03]"
        >
          <router-link to="/home">HOME</router-link>
        </li>
        <li
          class="font-dm text-sm font-medium text-slate-700 ease-in-out hover:scale-[1.03]"
        >
          <router-link to="/about">ABOUT US</router-link>
        </li>

        <li
          class="font-dm text-sm font-medium text-slate-700 ease-in-out hover:scale-[1.03]"
        >
          <router-link to="/manage-booking">MANAGE BOOKING</router-link>
        </li>
      </ul>
      <div class="hidden items-center justify-center gap-6 lg:pr-12 md:flex">
        <a
          href="/login"
          class="rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >Sign up
        </a>
      </div>
      <div class="relative flex items-center justify-center pr-5 md:hidden">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="h-6 w-auto text-slate-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateRouter = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped></style>
