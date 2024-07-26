<template>
  <div class="relative">
    <section class="relative h-[85vh]">
      <img
        src="../../assets/images/banner.png"
        class="object-cover w-full h-full max-md:hidden opacity-60" />
      <div class="absolute sm:top-1/4 top-[10%] left-1/3 -translate-x-1/3">
        <p
          class="text-2xl text-balance text-left sm:text-3xl uppercase mb-4 font-[1000] w-full sm:w-[30rem]">
          Rent a car with Sikuta Australia
        </p>
        <p
          class="text-xl text-pretty text-left sm:text-2xl w-full sm:w-[35rem] mb-5">
          Increase efficiency and improve your customer experience with Skikuta
          Australia.
        </p>
        <div class="bg-white rounded-md">
          <div class="flex flex-col sm:flex-row h-auto sm:h-[70px] px-5">
            <div class="relative">
              <input
                type="text"
                id="pickup-location"
                class="border-b w-full sm:w-56 mr-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
                autocomplete="off"
                v-model="search" />
              <label
                for="pickup-location"
                class="absolute left-0 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-[-0.5rem] peer-focus:text-gray-700 transition-all"
                :class="search ? 'text-xs -top-[-0.5rem]' : 'top-5'"
                >Pick-up Location</label
              >
            </div>
            <div class="relative">
              <input
                type="date"
                id="fromdate"
                class="border-b w-full sm:w-56 left-0 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
                autocomplete="off"
                v-model="fromDate" />
              <label
                for="fromdate"
                class="absolute left-0 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all">
                From</label
              >
            </div>

            <div class="relative">
              <input
                type="date"
                id="todate"
                class="border-b w-full sm:w-56 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
                autocomplete="off"
                required
                v-model="toDate" />
              <label
                for="todate"
                class="absolute left-0 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all">
                To</label
              >
            </div>
          </div>
          <p v-if="isError" class="pb-2 pl-5 text-red-700">
            The fields can't be empty.
          </p>
        </div>
        <button
          class="bg-[#dc143c] text-white px-10 py-2 rounded-md cursor-pointer mt-3 hover:bg-[#902c40]"
          @click="searchCars">
          Search
        </button>
      </div>
    </section>

    <!-- Who We Are Section -->

    <section>
      <div class="px-4 py-6 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-[70vh] lg:grid-cols-2">
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="silver1"
                src="../../assets/images/silver1.png"
                class="absolute inset-0 object-cover w-full h-full" />
            </div>
          </div>

          <div class="relative flex items-center bg-gray-100">
            <span
              class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div class="p-8 sm:p-16 lg:p-24">
              <h2 class="text-2xl font-bold sm:text-3xl">WHO WE ARE</h2>

              <p class="mt-4 text-gray-600">
                Nunc vulputate, purus sed interdum imperdiet, odio nibh
                facilisis mi, eget sodales lorem neque ac diam. Suspendisse non
                mauris euismod, fringilla orci quis, rutrum urna. Phasellus eu
                eleifend leo. Curabitur eleifend rhoncus tellus, eget mattis
                lectus efficitur non. Curabitur a urna ex.
              </p>

              <a
                class="mt-8 inline-block rounded border border-[#dc143c] bg-[#dc143c] px-12 py-3 text-sm font-medium text-white hover:bg-[#902c40] focus:outline-none focus:ring">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Services Section -->

    <section>
      <h1 class="flex justify-center text-3xl p-11">OUR LOCATION</h1>
      <div class="flex flex-wrap justify-center gap-10 pb-16">
        <article
          class="relative w-full mb-4 overflow-hidden transition rounded-lg shadow hover:shadow-lg sm:w-1/2 lg:w-1/3">
          <img
            alt="brisbane"
            src="../../assets/images/brisbane.png"
            class="absolute inset-0 object-cover w-full h-full" />

          <div
            class="relative pt-32 bg-gradient-to-t from-gray-900/50 to-gray-900/25 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>
              <h3 class="mt-0.5 text-lg text-white">Brisbane</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
        <article
          class="relative w-full mb-4 overflow-hidden transition rounded-lg shadow hover:shadow-lg sm:w-1/2 lg:w-1/3">
          <img
            alt="townsvile"
            src="../../assets/images/townsville.png"
            class="absolute inset-0 w-full h-full object-fit" />

          <div
            class="relative pt-32 bg-gradient-to-t from-gray-900/50 to-gray-900/25 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>

              <h3 class="mt-0.5 text-lg text-white">Townsville</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { LOCAL_DATA } from "../../utils/constants";
import { getAvailableVerhicles, getUser } from "../../api/verhicleApi";
const router = useRouter();
const search = ref("");
const fromDate = ref("");
const toDate = ref("");
const isError = ref(false);
const hiringObject = ref({});

const formatDate = (date) => {
  const dateRaw = new Date(Date.parse(date));

  return `${dateRaw.getDate()}-${dateRaw.getMonth()}-${dateRaw.getFullYear()}`;
};
const searchCars = () => {
  if (search.value !== "" && fromDate.value !== "" && toDate.value !== "") {
    const data = (hiringObject.value = {
      search: search.value,
      fromDate: formatDate(fromDate.value),
      toDate: formatDate(toDate.value),
      hiringDuration: Math.round(
        (Date.parse(toDate.value) - Date.parse(fromDate.value)) /
          (1000 * 3600 * 24)
      ),
    });
    localStorage.setItem("hiringObject", JSON.stringify(data));
    router.push(`/available-car?search=${search.value}`);
    isError.value = false;
  } else {
    isError.value = true;
  }
};

onMounted(() => {
  const data = getAvailableVerhicles();
  const user = getUser();
  const listCar = JSON.parse(localStorage.getItem(LOCAL_DATA.LIST_CAR) || "[]");
  const listUser = JSON.parse(
    localStorage.getItem(LOCAL_DATA.LIST_USER) || "[]"
  );
  if (!listCar.length) {
    localStorage.setItem(LOCAL_DATA.LIST_CAR, JSON.stringify(data));
  }
  if (!listUser.length) {
    localStorage.setItem(LOCAL_DATA.LIST_USER, JSON.stringify(user));
  }
});
</script>

<style scoped></style>
