<template>
  <p class="mb-5 text-xl font-semibold">Booking List</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
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
            <a href="#" class="font-medium text-blue-600 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const listBooking = ref([]);
onMounted(() => {
  listBooking.value = JSON.parse(localStorage.getItem("bookingObject") || "[]");
});
</script>

<style lang="scss" scoped></style>
