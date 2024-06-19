<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
    <div class="sm:max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Manage Your Booking
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Please enter your booking code and last name to manage your booking.
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="booking-code" class="sr-only">Booking Code</label>
            <input id="booking-code" name="booking-code" type="text" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Booking Code" />
          </div>
          <div>
            <label for="last-name" class="sr-only">Last Name</label>
            <input id="last-name" name="last-name" type="text" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Manage Booking
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
