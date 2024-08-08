<template>
  <div class="bg-gray-100 py-12 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <div class="sm:max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Manage Your Booking
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Please enter your booking code and last name to manage your booking.
          </p>
        </div>
        <div class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="booking-code" class="sr-only">Booking Code</label>
              <input v-model="bookingRef" id="booking-code" type="text" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Booking Code" />
            </div>
            <div>
              <label for="last-name" class="sr-only">Last Name</label>
              <input v-model="lastName" id="last-name" type="text" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Last Name" />
            </div>
          </div>
          <div class="mx-2 text-red-500 font-bold" v-if="error">{{EMPTY_ERROR}}</div>

          <div>
            <button
                    @click="onSubmit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Manage Booking
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="details" class="mx-60">
      <div class="text-2xl font-bold my-10">Your booking: </div>
      <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Booking Number</th>
          <th scope="col" class="px-6 py-3">Car name</th>
          <th scope="col" class="px-6 py-3">Customer name</th>
          <th scope="col" class="px-6 py-3">From - To (Date)</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b" @click="show = !show">
          <td class="px-6 py-4">
            <svg :class="(show ? 'rotate-0' : '-rotate-90') + ' text-black w-6 h-6 z-40 cursor-pointer'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
            </svg>
          </td>
          <td class="px-6 py-4">
            <img :src="details?.car?.image" alt="veh-review" width="100" height="70" />
          </td>
          <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ details?.bookingRef }}
          </th>
          <td class="px-6 py-4">{{ details?.car?.carname }}</td>
          <td class="px-6 py-4">{{ details?.firstName }} {{ details?.lastName }}</td>
          <td class="px-6 py-4">{{ details?.fromDate }} - {{ details?.toDate }}</td>
          <td class="px-6 py-4">{{ details?.location }}</td>
          <td class="px-6 py-4">${{ details?.price }}</td>
          <td class="px-6 py-4">{{ details?.status }}</td>
        </tr>
        <tr v-if="show">
          <td colspan="5" class="px-10">
            <div class="text-xl font-bold mb-2">Details Car</div>
            <table class="detail-car w-full text-sm text-left text-gray-500 rtl:text-right">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{{details?.car?.carname}}</td>
                </tr>
                <tr>
                  <td>Make</td>
                  <td>{{details?.car?.make}}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{{details?.car?.model}}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{{details?.car?.year}}</td>
                </tr>
                <tr>
                  <td>Seats</td>
                  <td>{{details?.car?.seats}}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>{{details?.car?.doors}}</td>
                </tr>
                <tr>
                  <td>AC</td>
                  <td>{{details?.car?.ac ? 'Yes' : 'No'}}</td>
                </tr>
                <tr>
                  <td>Suit Cases</td>
                  <td>{{details?.car?.suit_cases}}</td>
                </tr>
                <tr>
                  <td>Driving Age</td>
                  <td>{{details?.car?.driving_age}}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{{details?.car?.location}}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{{details?.car?.price}}</td>
                </tr>
                <tr>
                  <td>Car Type</td>
                  <td>{{details?.car?.car_type}}</td>
                </tr>
                <tr>
                  <td>Hybird</td>
                  <td>{{details?.car?.hybird ? 'Yes' : 'No'}}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="!details && details !== null" class="mx-60 text-2xl font-bold">
      <p>No booking found !</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {ApiGetBookingClient} from "../../api/booking.js";

const EMPTY_ERROR = "Please complete all information!"
const bookingRef = ref()
const lastName = ref()
const details = ref(null)
const show = ref(false)
const error = ref(false)
const onSubmit = async () => {
  if(bookingRef.value && lastName.value){
    error.value = false
    try {
      const res = await ApiGetBookingClient({
        bookingRef: bookingRef.value,
        lastName: lastName.value,
      })
      details.value = res.data.data
    }catch (e) {
      console.log(e)
    }
  }else{
    error.value = true
    details.value = null
  }
}
</script>

<style scoped lang="scss">
.detail-car {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  & td, & th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  & tr:nth-child(even) {
    background-color: #dddddd;
  }
}
</style>
