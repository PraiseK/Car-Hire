<template>
  <p class="mb-5 text-xl font-semibold">Booking List</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Booking Number</th>
          <th scope="col" class="px-6 py-3">Car name</th>
          <th scope="col" class="px-6 py-3">Customer name</th>
          <th scope="col" class="px-6 py-3">From - To (Date)</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of listBooking" class="bg-white border-b">
          <td class="px-6 py-4">
            <img :src="item.imgDir" alt="veh-review" width="100" height="70" />
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ item?.bookingRef }}
          </th>
          <td class="px-6 py-4">{{ item?.name }}</td>
          <td class="px-6 py-4">{{ item?.firstName }} {{ item?.lastName }}</td>
          <td class="px-6 py-4">{{ item?.fromDate }} - {{ item?.toDate }}</td>
          <td class="px-6 py-4">{{ item?.location }}</td>
          <td class="px-6 py-4">{{ item?.price }}</td>
          <td class="px-6 py-4">{{ item?.status }}</td>
          <td class="px-6 py-4">
            <button
              class="font-medium text-blue-600 hover:underline"
              @click="detailBooking(item.bookingRef)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { LOCAL_DATA } from "../../utils/constants";

const router = useRouter();
const listBooking = ref([]);
onMounted(() => {
  listBooking.value = JSON.parse(
    localStorage.getItem(LOCAL_DATA.BOOKING_LIST) || "[]"
  );
});

const detailBooking = (id) => {
  router.push(`/admin/booking/${id}`);
};
</script>

<style lang="scss" scoped>
</style>
