<template>
  <section class="mx-auto container max-w-6xl pb-4">
    <p class="w-full font-[700] text-4xl pt-4 pb-4">Confirm Your Booking</p>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="p-3 border-solid border-[#bfbfbf] border rounded-md col-span-2"
      >
        <p class="text-2xl font-bold">1.Driver details</p>
        <form>
          <div class="flex flex-col pt-4">
            <label>First name*</label>
            <input
              type="text"
              class="border-[#bfbfbf] border rounded-md items-center p-4 w-2/3 h-14 mt-2"
              required
            />
          </div>
          <div class="flex flex-col pt-4">
            <label>Last name*</label>
            <input
              type="text"
              class="border-[#bfbfbf] border rounded-md items-center p-4 w-2/3 h-14 mt-2"
              required
            />
          </div>
          <div class="flex flex-col pt-4">
            <label>Date of birth*</label>
            <input
              type="date"
              class="border-[#bfbfbf] border rounded-md uppercase items-center p-4 w-2/3 h-14 mt-2"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div class="flex flex-col pt-4">
            <label>Email*</label>
            <input
              type="email"
              class="border-[#bfbfbf] border rounded-md items-center p-4 w-2/3 h-14 mt-2"
              placeholder="example@gmail.com"
            />
          </div>

          <div class="flex items-center mt-5">
            <input type="checkbox" class="mr-5 size-6" />
            <label class="text-sm"
              >I consent to receive news and special offers from Sikuta
              Australia.</label
            >
          </div>
          <div class="flex items-center mt-5">
            <input type="checkbox" class="mr-5 size-6" />
            <label class="w-5/6 text-sm"
              >I wish to receive news and special offers from Sikuta Australia’s
              business partners. For a full list of partners who may send you
              emails, please consult our
              <span class="text-blue-700 font-bold cursor-pointer"
                >Privacy Policy</span
              >.
            </label>
          </div>
          <div class="flex flex-col pt-4">
            <label>Phone Number*</label>
            <div class="flex items-center">
              <button
                id="dropdown-phone-button"
                data-dropdown-toggle="dropdown-phone"
                class="flex-shrink-0 z-10 inline-flex mr-2 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 rounded-md border-solid border p-4 h-14"
                type="button"
              >
                <span class="inline-flex items-center">
                  <svg
                    class="h-4 w-4 me-2"
                    fill="none"
                    viewBox="0 0 20 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                    <mask
                      id="a"
                      style="mask-type: luminance"
                      width="20"
                      height="15"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <rect
                        width="19.6"
                        height="14"
                        y=".5"
                        fill="#fff"
                        rx="2"
                      />
                    </mask>
                    <g mask="url(#a)">
                      <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                      <path
                        fill="#fff"
                        stroke="#fff"
                        stroke-width=".667"
                        d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                      />
                      <path
                        fill="url(#paint0_linear_374_135177)"
                        fill-rule="evenodd"
                        d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="url(#paint1_linear_374_135177)"
                        fill-rule="evenodd"
                        d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                        clip-rule="evenodd"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_374_135177"
                        x1="0"
                        x2="0"
                        y1=".5"
                        y2="7.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#F0F0F0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_374_135177"
                        x1="0"
                        x2="0"
                        y1=".5"
                        y2="7.033"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF2E3B" />
                        <stop offset="1" stop-color="#FC0D1B" />
                      </linearGradient>
                    </defs>
                  </svg>
                  +61
                </span>
              </button>
              <div class="relative w-full">
                <input
                  type="text"
                  id="phone-input"
                  class="block p-4 h-14 z-20 rounded-md text-sm text-gray-900 border-solid border w-2/3"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="412-345-678"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <!--Cart Verhicle Review Section-->
      <div
        class="relative p-3 border-solid border-[#bfbfbf] border rounded-md h-[70vh]"
      >
        <p class="text-2xl font-bold">Review</p>
        <div class="pt-6 flex justify-between border-b-2 pb-2">
          <p class="text-xl font-bold">Verhicle</p>
          <p class="text-xl font-bold">{{ `$${verhicleSelected.price}` }}</p>
        </div>

        <!--- Verhicle Name-->
        <div class="flex gap-5 mt-3 font-bold">
          <img
            :src="verhicleSelected.imgDir"
            alt="veh-review"
            width="100"
            height="70"
          />
          <div>
            <p class="mt-2">
              {{ verhicleSelected.name }}
            </p>
            <label class="text-sm font-bold text-[#a1a0a0]">2018</label>
          </div>
        </div>
        <!--- Verhicle Status -->
        <div class="flex gap-2 items-center mt-4">
          <div class="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="ecw-icon__svg"
              style="
                fill: rgb(191, 191, 191);
                transform: rotate(0deg);
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
              "
            >
              <defs>
                <path
                  d="M17.918 7.718a2.765 2.765 0 011.828 2.596v11.062h-8.832V10.314c0-1.195.764-2.212 1.829-2.596a3.884 3.884 0 005.175 0zm-11.244.257a3.584 3.584 0 003.558.59 3.838 3.838 0 00-.423 1.75v9.805H5v-9.607c0-1.136.69-2.114 1.674-2.538zm2.29-5.271c1.24 0 2.269.91 2.46 2.096 0 .16.013.317.032.472a2.497 2.497 0 01-2.492 2.423 2.499 2.499 0 01-2.496-2.496 2.498 2.498 0 012.496-2.495zM15.33 2c1.544 0 2.8 1.256 2.8 2.8 0 1.545-1.256 2.8-2.8 2.8a2.804 2.804 0 01-2.8-2.8c0-1.544 1.256-2.8 2.8-2.8z"
                  id="pax_svg__a"
                ></path>
              </defs>
              <use xlink:href="#pax_svg__a" fill-rule="evenodd"></use>
            </svg>
            {{ verhicleSelected.seats }}
          </div>
          <div class="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="ecw-icon__svg"
              style="
                fill: rgb(191, 191, 191);
                transform: rotate(0deg);
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
              "
            >
              <defs>
                <path
                  d="M18.897 11.009H5.773c-.5-.198-.567-.496-.36-.86l4.719-4.656c.106-.09.19-.214.375-.187h8.39v5.703zm-.66 3.051h-1.81a.38.38 0 110-.762h1.81a.381.381 0 010 .762zm-7.67-10.056a1.456 1.456 0 00-.11-.004c-.64 0-1.033.373-1.169.502l-.036.03L4.37 9.349l-.09.156c-.23.407-.293.773-.278 1.076L4 10.578v9.3h16.198V4.005h-9.63z"
                  id="doors_svg__a"
                ></path>
              </defs>
              <use xlink:href="#doors_svg__a" fill-rule="evenodd"></use>
            </svg>
            {{ verhicleSelected.doors }}
          </div>
          <div class="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="ecw-icon__svg"
              style="
                fill: rgb(191, 191, 191);
                transform: rotate(0deg);
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
              "
            >
              <defs>
                <path
                  d="M14 12h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm-3-5h2V4h-2v3zm4 0V4c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1v3c-1.7 0-3 1.3-3 3v8c0 1.3.8 2.4 2 2.8v.8c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V21h4v.6c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4v-.8c1.2-.4 2-1.5 2-2.8v-8c0-1.7-1.3-3-3-3z"
                  id="luggage_svg__a"
                ></path>
              </defs>
              <use xlink:href="#luggage_svg__a" fill-rule="evenodd"></use>
            </svg>
            {{ verhicleSelected.suitCases }}
          </div>
          <div class="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="ecw-icon__svg"
              style="
                fill: rgb(191, 191, 191);
                transform: rotate(0deg);
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
              "
            >
              <defs>
                <path
                  d="M17.875 4a2.125 2.125 0 00-1.063 3.963v3.474h-4.249V7.963a2.133 2.133 0 001.062-1.838 2.125 2.125 0 10-3.188 1.838v3.474h-4.25V7.963A2.122 2.122 0 005.125 4a2.125 2.125 0 00-1.063 3.963v9.073A2.122 2.122 0 005.125 21a2.125 2.125 0 001.063-3.964v-3.474h4.25v3.475A2.122 2.122 0 0011.5 21a2.125 2.125 0 001.063-3.963v-3.474h5.312c.587 0 1.063-.476 1.063-1.063V7.963A2.122 2.122 0 0017.875 4"
                  id="transmission_svg__a"
                ></path>
              </defs>
              <use xlink:href="#transmission_svg__a" fill-rule="evenodd"></use>
            </svg>
            {{ verhicleSelected.carType }}
          </div>
          <div class="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="ecw-icon__svg"
              style="
                fill: rgb(191, 191, 191);
                transform: rotate(0deg);
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
              "
            >
              <defs>
                <path
                  d="M21.997 4a1 1 0 011 1v14a1 1 0 01-1 1H2.037a1 1 0 01-1-.997L1 5.003A1 1 0 011.997 4h20zM20.5 5.5H3.503a1 1 0 00-1 1v.003l.032 11a1 1 0 001 .997H20.5a1 1 0 001-1v-11a1 1 0 00-1-1zM18.997 14a1 1 0 110 2h-5a1 1 0 010-2h5zm-11.5-1c3.33 0 3.492 1.215 3.5 2.76V16h-7c0-1.657 0-3 3.5-3zm11.5-2a1 1 0 110 2h-5a1 1 0 010-2h5zM7.5 8a2 2 0 110 4 2 2 0 010-4zm8.497 0a1 1 0 110 2h-2a1 1 0 010-2h2z"
                  id="minimum_age_svg__a"
                ></path>
              </defs>
              <use xlink:href="#minimum_age_svg__a" fill-rule="evenodd"></use>
            </svg>
            {{ verhicleSelected.drivingAge }}
          </div>
        </div>

        <!---Pickup Status -->
        <div class="bg-[#f7f7f7] p-4 rounded-t-md mt-5 border-b-2">
          <label class="font-bold text-sm">Pick up</label>

          <p class="font-bold text-lg">{{ verhicleSelected.location }}</p>
          <label class="text-sm text-[#8b7e7e]">21-06-2024</label>
        </div>
        <div class="bg-[#f7f7f7] p-4 rounded-b-md">
          <label class="font-bold text-sm">Pick up</label>

          <p class="font-bold text-lg">{{ verhicleSelected.location }}</p>
          <label class="text-sm text-[#8b7e7e]">21-06-2024</label>
        </div>
        <!--End Pickup Satus-->

        <!--Total Status-->

        <div class="absolute flex flex-col w-[94%] pt-3 bottom-10 border-t-2">
          <div class="flex justify-between pb-5">
            <p class="font-[400] text-md">Hiring Duration</p>
            <p>{{ hiringObject.hiringDuration }} Days</p>
          </div>

          <div class="flex justify-between">
            <p class="font-bold text-2xl">Total</p>
            <p class="font-bold text-2xl">
              {{
                `$${(
                  verhicleSelected.price * hiringObject.hiringDuration
                ).toFixed(2)}`
              }}
            </p>
          </div>
        </div>

        <!--End Total Status-->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const verhicleSelected = ref({});
const hiringObject = ref({});

onMounted(() => {
  const savedVehicle = JSON.parse(localStorage.getItem("selectedVerhicle"));
  const savedHiring = JSON.parse(localStorage.getItem("hiringObject"));
  if (savedVehicle) {
    verhicleSelected.value = savedVehicle;
  }
  if (savedHiring) {
    hiringObject.value = savedHiring;
  }
});
</script>

<style lang="scss" scoped></style>
