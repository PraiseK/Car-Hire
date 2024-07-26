<template>
  <div class="mb-5 text-xl font-semibold">
    Details Booking: {{ detailBooking?.bookingRef }}
  </div>
  <div>
    <div class="mb-5 text-lg font-semibold">Select Car:</div>
    <select
      v-model="detailBooking.id"
      @change="onChange($event)"
      class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none">
      <option v-for="item of cars" :value="item.id">{{ item.name }}</option>
    </select>
    <img
      :src="detailBooking.imgDir"
      alt="veh-review"
      width="300"
      height="300" />
  </div>
  <p class="mb-5 text-lg font-semibold">
    Customer Name: {{ detailBooking.lastName }} {{ detailBooking.lastName }}
  </p>
  <p class="mb-5 text-lg font-semibold">
    Pick-up Date: {{ detailBooking.fromDate }} - {{ detailBooking.toDate }}
  </p>
  <p class="mb-5 text-lg font-semibold">
    Pick-up Location: {{ detailBooking.location }}
  </p>
  <p class="mb-5 text-lg font-semibold">
    Price: <span class="text-red-400">${{ detailBooking.price }}</span>
  </p>
  <div class="mb-5 text-lg font-semibold">Status:</div>
  <select
    v-model="detailBooking.status"
    @change="onChange($event)"
    class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none">
    <option v-for="item of STATUS_BOOKING" :value="item">{{ item }}</option>
  </select>

  <button
    @click="onSubmit"
    class="my-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]">
    Save
  </button>
</template>

<script setup>
import { onMounted, ref, toRaw } from "vue";
import { LOCAL_DATA, STATUS_BOOKING } from "../../utils/constants";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const detailBooking = ref({});
const detailBackUp = ref();
const listBooking = ref([]);
const cars = ref([]);
onMounted(() => {
  cars.value = JSON.parse(localStorage.getItem(LOCAL_DATA.LIST_CAR) || "[]");
  listBooking.value = JSON.parse(
    localStorage.getItem(LOCAL_DATA.BOOKING_LIST) || "[]"
  );
  const details = listBooking.value.find(
    (item) => item.bookingRef === route.path.split("/")?.[3]
  );
  detailBooking.value = details;
  detailBackUp.value = details.id;
});

const onChange = (e) => {
  const selectedCar = toRaw(
    cars.value.find((item) => +item.id === +e.target.value)
  );
  detailBooking.value = Object.assign(detailBooking.value, selectedCar);
};

const onSubmit = () => {
  const result = listBooking.value.map((item) => {
    if (detailBooking.value.bookingRef === item.bookingRef) {
      return toRaw(detailBooking.value);
    } else {
      return item;
    }
  });

  if (detailBooking.value.id !== detailBackUp.value) {
    const newListCar = cars.value.map((item) => {
      if (item.id === detailBackUp.value) return { ...item, available: true };
      else if (item.id === detailBooking.value.id)
        return { ...item, available: false };
      else return item;
    });
    localStorage.setItem(
      LOCAL_DATA.LIST_CAR,
      JSON.stringify(toRaw(newListCar))
    );
  }
  localStorage.setItem(LOCAL_DATA.BOOKING_LIST, JSON.stringify(toRaw(result)));
  router.push("/admin/booking");
};
</script>

<style lang="scss" scoped></style>
