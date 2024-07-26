<template>
  <button
    @click="isCreate = true"
    class="bg-[#DC143C] text-white p-3 font-semibold capitalize rounded cursor-pointer">
    Create new verhicel
  </button>
  <div
    v-if="isCreate"
    class="p-3 my-4 border border-gray-300 border-solid rounded">
    <div class="flex flex-wrap items-end gap-3">
      <div v-for="item of inputModel">
        <label
          v-if="item.type === 'select' || item.type === 'input'"
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900">
          {{ item.label }}
        </label>
        <input
          v-if="item.type === 'input'"
          v-model="form[item.prop]"
          :id="item.prop"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72" />
        <select
          v-if="item.type === 'select'"
          v-model="form[item.prop]"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72">
          <option v-for="v of CAR_TYPE" :value="v.value">{{ v.label }}</option>
        </select>
        <div class="flex items-center mb-4" v-if="item.type === 'checkbox'">
          <input
            v-model="form[item.prop]"
            id="checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
          <label
            for="checkbox"
            class="text-sm font-medium text-gray-900 ms-2"
            >{{ item.label }}</label
          >
        </div>
      </div>
    </div>
    <button
      @click="onSubmit"
      class="my-4 mr-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]">
      Save
    </button>
    <button
      @click="isCreate = false"
      class="my-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#adadad] to-[#a1a1a1] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#969696] transition-transform duration-200 ease-in-out hover:scale-[1.03]">
      Close
    </button>
  </div>
  <p class="my-5 text-xl font-semibold">Car List</p>
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
            <button
              class="mr-5 font-medium text-blue-600 underline hover:underline">
              Edit
            </button>
            <button
              @click="deleteCar(item)"
              class="font-medium text-red-600 underline hover:underline">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { LOCAL_DATA } from "../../utils/constants";
import { CAR_TYPE } from "../../utils/constants";

const initialValue = {
  name: "",
  make: "",
  model: "",
  year: "",
  seats: "",
  doors: "",
  ac: "",
  suitCases: "",
  drivingAge: "",
  location: "",
  price: "",
  imgDir: "",
  carType: "",
  isHybird: "",
};
let form = reactive({ ...initialValue });
const listCar = ref([]);
const inputModel = [
  { label: "Car name", prop: "name", type: "input" },
  { label: "Make", prop: "make", type: "input" },
  { label: "Modal", prop: "model", type: "input" },
  { label: "Year", prop: "year", type: "input" },
  { label: "Seats", prop: "seats", type: "input" },
  { label: "Doors", prop: "doors", type: "input" },
  { label: "AC", prop: "ac", type: "checkbox" },
  { label: "Suit Cases", prop: "suitCases", type: "input" },
  { label: "Driving Age", prop: "drivingAge", type: "input" },
  { label: "Location", prop: "location", type: "input" },
  { label: "Price", prop: "price", type: "input" },
  { label: "Image", prop: "imgDir", type: "input" },
  { label: "Car Type", prop: "carType", type: "select" },
  { label: "Hybrid", prop: "isHybird", type: "checkbox" },
];
const isCreate = ref(false);
onMounted(() => {
  listCar.value = JSON.parse(localStorage.getItem(LOCAL_DATA.LIST_CAR) || "[]");
});

const onSubmit = () => {
  const payload = {
    ...form,
    id: Math.floor(Math.random() * 9999),
    available: true,
    ac: Boolean(form.ac),
    isHybird: Boolean(form.isHybird),
  };
  listCar.value = [...listCar.value, payload];
  localStorage.setItem(LOCAL_DATA.LIST_CAR, JSON.stringify(listCar.value));
  isCreate.value = false;
  form = reactive(initialValue);
};

const deleteCar = (item) => {
  listCar.value = listCar.value.filter((v) => v.id !== item.id);
  localStorage.setItem(LOCAL_DATA.LIST_CAR, JSON.stringify(listCar.value));
};
</script>

<style lang="scss" scoped></style>
