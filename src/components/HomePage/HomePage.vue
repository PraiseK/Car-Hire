<template>
  <div class="relative">
    <section>
      <img class="opacity-60" src="../../assets/images/banner.png" />
      <div class="absolute top-[7%] left-[17%]">
        <p class="text-6xl uppercase mb-4 font-[1000] tracking-wider w-[30rem]">
          Rent a car with Sikute Australia
        </p>
        <p class="text-2xl w-[35rem] mb-5">
          Increase efficiency and improve your customer experience with Skikute
          Australia.
        </p>
        <div class="flex bg-white h-[70px] rounded-md">
          <div class="relative">
            <input
              type="text"
              id="pickup-location"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="pickup-location"
              class="absolute left-0 mx-5 top-5 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-[-0.5rem] peer-focus:text-gray-700 transition-all"
              >Pick-up Location</label
            >
          </div>
          <div class="relative">
            <input
              type="date"
              id="fromdate"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="fromdate"
              class="absolute left-0 mx-5 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all"
            >
              From</label
            >
          </div>

          <div class="relative">
            <input
              type="date"
              id="todate"
              class="border-b w-56 mx-5 my-5 py-1 focus:outline-none focus:border-[#dc143c] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="todate"
              class="absolute left-0 mx-5 text-gray-600 cursor-text text-xs -top-[-0.5rem] peer-focus:text-gray-700 transition-all"
            >
              To</label
            >
          </div>
        </div>
        <button
          class="bg-[#dc143c] text-white px-10 py-2 rounded-md cursor-pointer mt-3 hover:bg-[#902c40]"
        >
          Search
        </button>
      </div>
    </section>

    <!-- Who We Are Section -->

    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-[70vh] lg:grid-cols-2">
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="silver1"
                src="../../assets/images/silver1.png"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div class="relative flex items-center bg-gray-100">
            <span
              class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div class="p-8 sm:p-16 lg:p-24">
              <h2 class="text-2xl font-bold sm:text-3xl">WHO WE ARE</h2>

              <p class="mt-4 text-gray-600">
                Nunc vulputate, purus sed interdum imperdiet, odio nibh
                facilisis mi, eget sodales lorem neque ac diam. Suspendisse non
                mauris euismod, fringilla orci quis, rutrum urna. Phasellus eu
                eleifend leo. Curabitur eleifend rhoncus tellus, eget mattis
                lectus efficitur non. Curabitur a urna ex.
              </p>

              <a
                class="mt-8 inline-block rounded border border-[#dc143c] bg-[#dc143c] px-12 py-3 text-sm font-medium text-white hover:bg-[#902c40] focus:outline-none focus:ring"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Services Section -->

    <section>
      <h1 class="flex justify-center p-11 text-3xl">OUR LOCATION</h1>
      <div class="flex flex-wrap justify-center gap-10 pb-16">
        <article
          class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-1/2 lg:w-1/3 mb-4"
        >
          <img
            alt="brisbane"
            src="../../assets/images/brisbane.png"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div
            class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
          >
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>
              <h3 class="mt-0.5 text-lg text-white">Brisbane</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
        <article
          class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-1/2 lg:w-1/3 mb-4"
        >
          <img
            alt="townsvile"
            src="../../assets/images/townsville.png"
            class="absolute inset-0 h-full w-full object-fit"
          />

          <div
            class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
          >
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                LOCATION
              </time>

              <h3 class="mt-0.5 text-lg text-white">Townsville</h3>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Footer Section -->

    <footer class="bg-gradient-to-r from-gray-100 via-[#ffbcbc] to-gray-100">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p class="max-w-xs mt-4 text-4xl text-gray-600 font-extrabold">
              Sikuta Car Rental
            </p>
            <div class="flex mt-8 space-x-6 text-gray-600">
              <a class="hover:opacity-75" rel="noreferrer">
                <span class="sr-only"> Facebook </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a class="hover:opacity-75" rel="noreferrer">
                <span class="sr-only"> Instagram </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a class="hover:opacity-75" rel="noreferrer">
                <span class="sr-only"> Twitter </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a class="hover:opacity-75" rel="noreferrer">
                <span class="sr-only"> GitHub </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p class="font-medium">Company</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75"> About </a>
                <a class="hover:opacity-75"> History </a>
                <a class="hover:opacity-75"> Careers </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Services</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75"> Car Rental </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Helpful Links</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75"> Contact </a>
                <a class="hover:opacity-75"> FAQs </a>
                <a class="hover:opacity-75"> Live Chat </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Legal</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75"> Privacy Policy </a>
                <a class="hover:opacity-75"> Terms &amp; Conditions </a>
                <a class="hover:opacity-75"> Returns Policy </a>
                <a class="hover:opacity-75"> Accessibility </a>
              </nav>
            </div>
          </div>
        </div>
        <p class="mt-8 text-xs text-gray-800">© 2024 Sikuta</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
