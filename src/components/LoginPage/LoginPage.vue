<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../../assets/images/logo.png"
          alt="Sikuta Australia Logo"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          New Here?
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Welcome! Sign up and discover great opportunities.
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up with email
          </button>
        </div>
        <div class="flex items-center justify-center">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              or continue with
            </a>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4285F4] hover:bg-[#357ae8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Google
          </button>
        </div>

        <p class="mt-2 text-center text-sm text-gray-600">
          By clicking continue, you agree to our
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Terms of Service</a
          >
          and
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Privacy Policy</a
          >.
        </p>

        <div class="flex items-center justify-center">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account?
            </a>
          </div>
        </div>
        <div>
          <router-link
            to="/login"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#dc143c] hover:bg-[#902c40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
