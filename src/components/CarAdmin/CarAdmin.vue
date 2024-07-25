<template>
  <p class="mb-5 text-xl font-semibold">Car List</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Car name</th>
          <th scope="col" class="px-6 py-3">Year</th>
          <th scope="col" class="px-6 py-3">Seats</th>
          <th scope="col" class="px-6 py-3">Doors</th>
          <th scope="col" class="px-6 py-3">SuitCases</th>
          <th scope="col" class="px-6 py-3">Available</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of listCar" class="bg-white border-b">
          <td class="px-6 py-4">
            <img :src="item.imgDir" alt="veh-review" width="100" height="70" />
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ item?.name }}
          </th>
          <td class="px-6 py-4">{{ item?.year }}</td>
          <td class="px-6 py-4">{{ item?.seats }}</td>
          <td class="px-6 py-4">{{ item?.doors }}</td>
          <td class="px-6 py-4">{{ item?.suitCases }}</td>
          <td class="px-6 py-4">
            {{ item?.available ? "Available" : "Unavailable" }}
          </td>
          <td class="px-6 py-4">{{ item?.price }}</td>
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
import { LOCAL_DATA } from "../../utils/constants";

const listCar = ref([]);
onMounted(() => {
  listCar.value = JSON.parse(localStorage.getItem(LOCAL_DATA.LIST_CAR) || "[]");
});
</script>

<style lang="scss" scoped></style>
