<template>
  <div class="bg-gray-100 mb-5 rounded">
    <div class="text-3xl font-bold p-5">Booking Overview</div>
    <div class="container flex flex-col mx-auto">
      <div class="w-full draggable">
        <div class="container flex flex-col items-center gap-16 mx-auto my-12">
          <div class="grid w-full grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-y-8">
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{bookingOverview?.totalBooking}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Total Booking</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{bookingOverview?.bookingPending}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Pending</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{bookingOverview?.bookingProgress}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Progress</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{bookingOverview?.bookingComplete}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Completed</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{bookingOverview?.bookingCancel}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Canceled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 rounded">
  <div class="text-3xl font-bold p-5">Car Overview</div>
    <div class="container flex flex-col mx-auto">
      <div class="w-full draggable">
        <div class="container flex flex-col items-center gap-16 mx-auto my-12">
          <div class="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-8">
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{carOverview?.totalCar}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Total Car</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{carOverview?.carAvailables}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Available</p>
            </div>
            <div class="flex flex-col items-center">
              <h3 class="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">{{carOverview?.carUnavailabes}}</h3>
              <p class="text-base font-medium leading-7 text-center text-dark-grey-600">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {ApiGetBookingOverView, ApiGetCarOverView} from "../../api/dashboard.js";

const carOverview = ref()
const bookingOverview = ref()
onMounted(async () => {
  try {
    const res = await ApiGetBookingOverView()
    bookingOverview.value = res.data
  }catch (e) {
    console.log(e)
  }

  try {
    const res = await ApiGetCarOverView()
    carOverview.value = res.data
  }catch (e) {
    console.log(e)
  }
})
</script>

<style lang="scss" scoped></style>
