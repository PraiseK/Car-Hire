<template>
  <div class="mb-5 text-xl font-semibold">
    Details Booking: {{ detailBooking?.bookingRef }}
  </div>
  <div>
    <div class="mb-5 text-lg font-semibold">Select Car:</div>
    <select
      v-model="carId"
      @change="onChange($event)"
      class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none"
    >
      <option v-for="item of cars" :value="item.id" :disabled="!item.available">
        {{ item.name }}
      </option>
    </select>
    <img :src="carImage" alt="veh-review" width="300" height="300" />
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
    Price: <span class="text-red-400">${{ price }}</span>
  </p>
  <div class="mb-5 text-lg font-semibold">Status:</div>
  <select
    v-model="detailBooking.status"
    class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-none"
  >
    <option v-for="item of STATUS_BOOKING" :value="item">{{ item }}</option>
  </select>

  <button
    @click="onSubmit"
    class="my-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]"
  >
    Save
  </button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { STATUS_BOOKING } from "../../utils/constants";
import { useRoute, useRouter } from "vue-router";
import { ApiGetBookingDetail, ApiUpdateBooking } from "../../api/booking";
import { ApiGetAllCar } from "../../api/car";

const route = useRoute();
const router = useRouter();
const detailBooking = ref({});
const cars = ref([]);
const carsIdOld = ref([]);
const carId = ref();
const carImage = ref();
const price = ref();
const hiringDuration = ref();
onMounted(async () => {
  try {
    const res = await ApiGetBookingDetail(route.path.split("/")?.[3]);
    detailBooking.value = res.data.data;
    carId.value = res.data.data.car._id;
    carsIdOld.value = res.data.data.car._id;
    carImage.value = res.data.data.car.image;
    price.value = res.data.data.car.price * res.data.data.hiringDuration;
    hiringDuration.value = res.data.data.hiringDuration;
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await ApiGetAllCar();
    cars.value = res.data.data.map((item) => ({
      id: item._id,
      name: item.carname,
      image: item.image,
      price: item.price,
      available: item.available,
    }));
  } catch (error) {
    console.log(error);
  }
});

const onChange = (e) => {
  carId.value = cars.value.find((item) => item.id === e.target.value).id;
  carImage.value = cars.value.find((item) => item.id === e.target.value).image;
  price.value =
    cars.value.find((item) => item.id === e.target.value).price *
    hiringDuration.value;
};

const onSubmit = async () => {
  const payload = {
    ...detailBooking.value,
    car: carId.value,
    price: price.value,
    carOld: carsIdOld.value,
  };

  try {
    await ApiUpdateBooking(detailBooking.value._id, payload);
    router.push("/admin/booking");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
