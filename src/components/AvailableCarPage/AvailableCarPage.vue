<template>
  <section v-if="availableVerhicles" class="flex flex-col">
    <template v-if="availableVerhicles.length > 0">
      <section
        v-for="verhicle in availableVerhicles"
        :key="verhicle.id"
        class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div
            class="flex flex-col items-center p-5 mx-auto mb-10 bg-white border-b border-gray-200 rounded-lg sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 sm:mr-10">
              <img
                :src="verhicle.image"
                alt="verhicle"
                class="object-cover object-center" />
            </div>
            <div class="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h1 class="mb-2 text-2xl font-bold text-black title-font">
                {{ verhicle.carname }}
              </h1>
              <div class="py-4">
                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M17.918 7.718a2.765 2.765 0 011.828 2.596v11.062h-8.832V10.314c0-1.195.764-2.212 1.829-2.596a3.884 3.884 0 005.175 0zm-11.244.257a3.584 3.584 0 003.558.59 3.838 3.838 0 00-.423 1.75v9.805H5v-9.607c0-1.136.69-2.114 1.674-2.538zm2.29-5.271c1.24 0 2.269.91 2.46 2.096 0 .16.013.317.032.472a2.497 2.497 0 01-2.492 2.423 2.499 2.499 0 01-2.496-2.496 2.498 2.498 0 012.496-2.495zM15.33 2c1.544 0 2.8 1.256 2.8 2.8 0 1.545-1.256 2.8-2.8 2.8a2.804 2.804 0 01-2.8-2.8c0-1.544 1.256-2.8 2.8-2.8z"
                          id="pax_svg__a"></path>
                      </defs>
                      <use xlink:href="#pax_svg__a" fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">{{ verhicle.seats }}</p>
                  </div>
                </div>
                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M18.897 11.009H5.773c-.5-.198-.567-.496-.36-.86l4.719-4.656c.106-.09.19-.214.375-.187h8.39v5.703zm-.66 3.051h-1.81a.38.38 0 110-.762h1.81a.381.381 0 010 .762zm-7.67-10.056a1.456 1.456 0 00-.11-.004c-.64 0-1.033.373-1.169.502l-.036.03L4.37 9.349l-.09.156c-.23.407-.293.773-.278 1.076L4 10.578v9.3h16.198V4.005h-9.63z"
                          id="doors_svg__a"></path>
                      </defs>
                      <use xlink:href="#doors_svg__a" fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">
                      {{ verhicle.doors }}
                    </p>
                  </div>
                </div>
                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M14 12h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm-3-5h2V4h-2v3zm4 0V4c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1v3c-1.7 0-3 1.3-3 3v8c0 1.3.8 2.4 2 2.8v.8c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V21h4v.6c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4v-.8c1.2-.4 2-1.5 2-2.8v-8c0-1.7-1.3-3-3-3z"
                          id="luggage_svg__a"></path>
                      </defs>
                      <use
                        xlink:href="#luggage_svg__a"
                        fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">
                      {{ verhicle.suit_cases }}
                    </p>
                  </div>
                </div>
                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M17.875 4a2.125 2.125 0 00-1.063 3.963v3.474h-4.249V7.963a2.133 2.133 0 001.062-1.838 2.125 2.125 0 10-3.188 1.838v3.474h-4.25V7.963A2.122 2.122 0 005.125 4a2.125 2.125 0 00-1.063 3.963v9.073A2.122 2.122 0 005.125 21a2.125 2.125 0 001.063-3.964v-3.474h4.25v3.475A2.122 2.122 0 0011.5 21a2.125 2.125 0 001.063-3.963v-3.474h5.312c.587 0 1.063-.476 1.063-1.063V7.963A2.122 2.122 0 0017.875 4"
                          id="transmission_svg__a"></path>
                      </defs>
                      <use
                        xlink:href="#transmission_svg__a"
                        fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">
                      {{ verhicle.car_type }}
                    </p>
                  </div>
                </div>

                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M12.001 3a.774.774 0 00-.782.766v1.431L9.85 3.734a.796.796 0 00-1.107-.047.756.756 0 00-.047 1.083l2.523 2.696v3.207L8.384 9.07 7.26 5.58a.789.789 0 00-.983-.5.765.765 0 00-.51.962l.61 1.894-1.267-.717a.79.79 0 00-1.07.281.756.756 0 00.286 1.047l1.267.716-1.98.43a.766.766 0 00-.595.913.78.78 0 00.933.583l3.65-.791L10.436 12 7.6 13.603l-3.648-.792a.781.781 0 00-.933.582.767.767 0 00.594.915l1.98.43-1.266.715a.757.757 0 00-.286 1.047.786.786 0 001.069.28l1.267-.716-.61 1.895c-.13.403.1.834.51.962a.81.81 0 00.236.035.782.782 0 00.747-.535l1.124-3.491 2.835-1.603v3.204l-2.525 2.7a.756.756 0 00.048 1.082.795.795 0 001.106-.047l1.37-1.465v1.433c0 .423.35.766.783.766a.774.774 0 00.783-.766V18.8l1.37 1.466a.792.792 0 001.105.048.754.754 0 00.05-1.084l-2.525-2.7v-3.203l2.834 1.602 1.122 3.49a.781.781 0 00.981.5.764.764 0 00.512-.96l-.609-1.896 1.267.717c.122.07.256.102.39.102.27 0 .533-.137.678-.383a.756.756 0 00-.286-1.047l-1.266-.716 1.98-.43a.767.767 0 00.594-.914.782.782 0 00-.933-.582l-3.648.791L13.566 12l2.834-1.602 3.648.791a.778.778 0 00.932-.583.767.767 0 00-.595-.913l-1.978-.43 1.267-.716a.757.757 0 00.285-1.047.79.79 0 00-1.068-.28l-1.266.715.609-1.893a.764.764 0 00-.512-.962.787.787 0 00-.981.5l-1.122 3.49-2.835 1.603V7.467l2.524-2.698a.755.755 0 00-.05-1.083.794.794 0 00-1.104.047l-1.37 1.465V3.766A.774.774 0 0012 3"
                          id="air_conditionning_svg__a"></path>
                      </defs>
                      <use
                        xlink:href="#air_conditionning_svg__a"
                        fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">
                      {{ verhicle.ac ? "A/C" : "" }}
                    </p>
                  </div>
                </div>
                <div class="inline-block mr-2">
                  <div class="flex items-center h-full pr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="mr-2 ecw-icon__svg"
                      style="
                        fill: rgb(191, 191, 191);
                        transform: rotate(0deg);
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        min-height: 18px;
                      ">
                      <defs>
                        <path
                          d="M21.997 4a1 1 0 011 1v14a1 1 0 01-1 1H2.037a1 1 0 01-1-.997L1 5.003A1 1 0 011.997 4h20zM20.5 5.5H3.503a1 1 0 00-1 1v.003l.032 11a1 1 0 001 .997H20.5a1 1 0 001-1v-11a1 1 0 00-1-1zM18.997 14a1 1 0 110 2h-5a1 1 0 010-2h5zm-11.5-1c3.33 0 3.492 1.215 3.5 2.76V16h-7c0-1.657 0-3 3.5-3zm11.5-2a1 1 0 110 2h-5a1 1 0 010-2h5zM7.5 8a2 2 0 110 4 2 2 0 010-4zm8.497 0a1 1 0 110 2h-2a1 1 0 010-2h2z"
                          id="minimum_age_svg__a"></path>
                      </defs>
                      <use
                        xlink:href="#minimum_age_svg__a"
                        fill-rule="evenodd"></use>
                    </svg>
                    <p class="font-medium title-font">
                      {{ verhicle.driving_age }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="font-bold text-gray-800 md:flex">
                <div class="flex w-full space-x-3 md:w-1/2">
                  <div class="flex flex-col w-full max-sm:items-center">
                    <div class="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="mr-2 ecw-icon__svg"
                        style="
                          fill: rgb(0, 153, 0);
                          transform: rotate(0deg);
                          width: 24px;
                          height: 24px;
                          min-width: 24px;
                          min-height: 24px;
                        ">
                        <defs>
                          <path
                            d="M15.52 8.031l1.432 1.203a.134.134 0 01.016.188l-5.84 6.96a.134.134 0 01-.115.048.135.135 0 01-.076-.031l-3.888-3.263a.134.134 0 01-.018-.189l1.203-1.433a.134.134 0 01.189-.016l2.355 1.976 4.553-5.426a.134.134 0 01.188-.017"
                            id="tick_svg__a"></path>
                        </defs>
                        <use
                          xlink:href="#tick_svg__a"
                          fill-rule="evenodd"></use>
                      </svg>
                      <p>Unlimited mileage</p>
                    </div>
                    <div class="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="mr-2 ecw-icon__svg"
                        style="
                          fill: rgb(0, 153, 0);
                          transform: rotate(0deg);
                          width: 24px;
                          height: 24px;
                          min-width: 24px;
                          min-height: 24px;
                        ">
                        <defs>
                          <path
                            d="M15.52 8.031l1.432 1.203a.134.134 0 01.016.188l-5.84 6.96a.134.134 0 01-.115.048.135.135 0 01-.076-.031l-3.888-3.263a.134.134 0 01-.018-.189l1.203-1.433a.134.134 0 01.189-.016l2.355 1.976 4.553-5.426a.134.134 0 01.188-.017"
                            id="tick_svg__a"></path>
                        </defs>
                        <use
                          xlink:href="#tick_svg__a"
                          fill-rule="evenodd"></use>
                      </svg>
                      <p>Basic Protection included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <div>
                <p class="text-end max-sm:text-center">From</p>
                <p class="mb-6 text-4xl text-white-500">
                  ${{ verhicle.price }}/ day
                </p>
                <div class="flex justify-end max-sm:justify-center">
                  <button
                    class="p-4 text-xl text-white bg-red-400 rounded-md px-9 hover:bg-red-700"
                    @click="handleClick(verhicle)">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <!-- component -->
      <div class="flex flex-col items-center justify-between w-full py-24">
        <div
          class="flex flex-col items-center justify-center flex-1 text-center xl:w-1/2 lg:px-0">
          <svg
            class="w-3/4"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 945 583.2243"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path
              id="b0cf38c7-358d-48dc-a444-e9782686dfa5-94"
              data-name="Path 438"
              d="M222.88482,693.5243a24.21463,24.21463,0,0,0,23.38269-4.11877c8.18977-6.87442,10.758-18.196,12.84671-28.68191l6.17972-31.01657-12.93769,8.90836c-9.30465,6.40641-18.81827,13.01866-25.26012,22.29785s-9.25222,21.94708-4.07792,31.988"
              transform="translate(-127.5 -158.38785)"
              fill="#e6e6e6"></path>
            <path
              id="acbbaa8b-0bc2-4bc9-96d7-93dd88f90f19-95"
              data-name="Path 439"
              d="M224.88254,733.23486c-1.6284-11.86369-3.30382-23.88079-2.15885-35.87167,1.01467-10.64933,4.26374-21.04881,10.87831-29.57938a49.20592,49.20592,0,0,1,12.62466-11.44039c1.26216-.79648,2.4241,1.20354,1.16733,1.997A46.77938,46.77938,0,0,0,228.88954,680.666c-4.02858,10.24607-4.67546,21.41582-3.98154,32.30029.41943,6.58218,1.31074,13.12121,2.20587,19.65252a1.19817,1.19817,0,0,1-.808,1.4225,1.16348,1.16348,0,0,1-1.42253-.808Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f2f2f2"></path>
            <path
              id="bed63620-84ae-4c66-a7c8-0d9b30f8c1e7-96"
              data-name="Path 442"
              d="M236.60356,714.19841A17.82515,17.82515,0,0,0,252.135,722.217c7.8644-.37318,14.41806-5.85972,20.31713-11.07026l17.452-15.40881-11.54988-.5528c-8.30619-.39784-16.82672-.771-24.73813,1.79338s-15.20758,8.72639-16.654,16.9154"
              transform="translate(-127.5 -158.38785)"
              fill="#e6e6e6"></path>
            <path
              id="fc4eb8ca-daad-4589-b224-2c71eec1c546-97"
              data-name="Path 443"
              d="M220.27955,740.05454c7.83972-13.87142,16.93235-29.28794,33.1808-34.21551A37.02589,37.02589,0,0,1,267.4158,704.398c1.4819.128,1.1118,2.41174-.367,2.28454a34.39824,34.39824,0,0,0-22.27164,5.89215c-6.27994,4.27453-11.16975,10.21755-15.30781,16.51907-2.5351,3.8605-4.80576,7.88445-7.07642,11.903C221.66738,742.28125,219.54555,741.35371,220.27955,740.05454Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f2f2f2"></path>
            <path
              id="ec83fa9a-7bb4-4b90-a90b-e1cec4444963-98"
              data-name="Path 442"
              d="M1008.35714,710.03894a17.82515,17.82515,0,0,1-17.065,3.78282c-7.50783-2.37076-12.4416-9.35006-16.813-15.89522l-12.93426-19.3574,11.30757,2.41744c8.132,1.73826,16.46493,3.55513,23.45819,8.05635s12.47224,12.32329,11.77771,20.61"
              transform="translate(-127.5 -158.38785)"
              fill="#e6e6e6"></path>
            <path
              id="e32935a9-e392-46b4-9a67-68c65f1cc9fa-99"
              data-name="Path 443"
              d="M1017.53074,739.20841c-4.03412-15.41439-8.88464-32.64277-23.33408-41.55944a37.026,37.026,0,0,0-13.12367-4.9599c-1.46539-.255-1.69126,2.04749-.22905,2.30247a34.39822,34.39822,0,0,1,20.02606,11.3886c4.9789,5.73758,8.18741,12.733,10.57751,19.88279,1.46425,4.38021,2.63106,8.85084,3.79926,13.31624C1015.61991,741.00647,1017.90833,740.652,1017.53074,739.20841Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f2f2f2"></path>
            <path
              d="M858.65906,513.48057H594.33494a7.97081,7.97081,0,0,1-7.96157-7.96157V416.34942a7.97081,7.97081,0,0,1,7.96157-7.96157H858.65906a7.9707,7.9707,0,0,1,7.96157,7.96157V505.519A7.9707,7.9707,0,0,1,858.65906,513.48057Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f1f1f1"></path>
            <rect
              x="500.27353"
              y="273.88471"
              width="70.06181"
              height="7.96157"
              fill="#18185a"></rect>
            <circle
              cx="662.68956"
              cy="278.66165"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="678.6127"
              cy="278.66165"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="694.53583"
              cy="278.66165"
              r="4.77694"
              fill="#18185a"></circle>
            <path
              d="M858.65906,626.53486H594.33494a7.97081,7.97081,0,0,1-7.96157-7.96157V529.40371a7.97081,7.97081,0,0,1,7.96157-7.96157H858.65906a7.9707,7.9707,0,0,1,7.96157,7.96157v89.16958A7.9707,7.9707,0,0,1,858.65906,626.53486Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f1f1f1"></path>
            <rect
              x="500.27353"
              y="386.939"
              width="70.06181"
              height="7.96157"
              fill="#18185a"></rect>
            <circle
              cx="662.68956"
              cy="391.71594"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="678.6127"
              cy="391.71594"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="694.53583"
              cy="391.71594"
              r="4.77694"
              fill="#18185a"></circle>
            <path
              d="M858.65906,739.58915H594.33494a7.97081,7.97081,0,0,1-7.96157-7.96156V642.458a7.97081,7.97081,0,0,1,7.96157-7.96157H858.65906a7.9707,7.9707,0,0,1,7.96157,7.96157v89.16959A7.97069,7.97069,0,0,1,858.65906,739.58915Z"
              transform="translate(-127.5 -158.38785)"
              fill="#f1f1f1"></path>
            <rect
              x="500.27353"
              y="499.99329"
              width="70.06181"
              height="7.96157"
              fill="#18185a"></rect>
            <circle
              cx="662.68956"
              cy="504.77024"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="678.6127"
              cy="504.77024"
              r="4.77694"
              fill="#18185a"></circle>
            <circle
              cx="694.53583"
              cy="504.77024"
              r="4.77694"
              fill="#18185a"></circle>
            <path
              d="M759.01179,321.31453l-.29232-.216-.007-.00528a3.57626,3.57626,0,0,0-5.00334.73888L694.21319,401.9379h-6.54562v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.90531a1.43056,1.43056,0,0,0-1.43052,1.43052v1.53783h-2.26034v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.9053a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.253v-1.53783a1.43057,1.43057,0,0,0-1.43053-1.43052h-3.9053a1.43056,1.43056,0,0,0-1.43052,1.43052v1.53783h-2.26034v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052H655.259a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.253v-1.53783a1.43057,1.43057,0,0,0-1.43053-1.43052h-3.9053a1.43034,1.43034,0,0,0-1.43052,1.43052v1.53783H642.5488v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052H637.213a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.26034v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.9053a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.253v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.9053a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.26034v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.9053a1.43057,1.43057,0,0,0-1.43053,1.43052v1.53783h-2.253v-1.53783a1.43056,1.43056,0,0,0-1.43052-1.43052h-3.90531a1.43056,1.43056,0,0,0-1.43052,1.43052v1.53783H596.858a3.57618,3.57618,0,0,0-3.57631,3.57631V408.926a3.57618,3.57618,0,0,0,3.57631,3.57631h96.76151a5.32944,5.32944,0,0,0,5.21778-4.24744l.037.02751L759.74521,326.325l.00559-.00707A3.57671,3.57671,0,0,0,759.01179,321.31453Z"
              transform="translate(-127.5 -158.38785)"
              fill="#3f3d56"></path>
            <polygon
              points="255.504 550.825 267.523 556.976 296.966 513.544 279.228 504.466 255.504 550.825"
              fill="#ffb7b7"></polygon>
            <path
              d="M381.94612,703.72021l23.66983,12.113.001.00049a16.94563,16.94563,0,0,1,7.3641,22.8037l-.25087.49017-38.75427-19.83265Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <polygon
              points="394.317 567.652 407.819 567.652 414.242 515.575 394.315 515.575 394.317 567.652"
              fill="#ffb7b7"></polygon>
            <path
              d="M518.37323,721.632l26.58922-.00107h.00107a16.94563,16.94563,0,0,1,16.94473,16.94446v.55063l-43.53421.00162Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <path
              d="M458.66285,301.26058s-9.0412-6.9268-9.0412,9.99291l-1.42756,55.91271,15.94107,52.81966,9.27913-17.1307-3.80682-37.11652Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <path
              d="M555.37734,454.19165s10.48418,51.058-2.79579,92.95976l-7.33892,161.10695-26.90941-2.09684-9.43576-119.51969-9.0863-59.41037-18.87153,54.16828L418.73348,696.02681l-28.65677-22.36625s31.75629-86.64916,55.2167-104.84184l11.76615-134.011Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <circle
              cx="523.48018"
              cy="202.31369"
              r="30.68251"
              transform="translate(-32.63308 406.2144) rotate(-61.33685)"
              fill="#ffb7b7"></circle>
            <path
              d="M521.30883,208.82157c3.67807.47856,6.45254-3.28467,7.73937-6.76336s2.2673-7.5286,5.46514-9.40772c4.36891-2.56725,9.95872.52048,14.95479-.32655,5.64211-.95654,9.31053-6.93607,9.598-12.65146s-1.987-11.21239-4.21862-16.48193l-.77911,6.54884a12.98679,12.98679,0,0,0-5.67512-11.35154l1.00419,9.60941A10.199,10.199,0,0,0,537.6641,159.558l.15814,5.72564c-6.51663-.77489-13.09021-1.55087-19.62615-.96052s-13.11751,2.65828-18.0712,6.96269c-7.40994,6.43874-10.11621,17.04088-9.20765,26.81529s4.94341,18.95675,9.14865,27.827c1.058,2.23177,2.52146,4.75016,4.97491,5.03445,2.20445.25544,4.22155-1.58732,4.90683-3.698a13.40422,13.40422,0,0,0-.0595-6.58474c-.62-3.2946-1.40155-6.6621-.81863-9.96346s2.9579-6.56372,6.28582-6.96831,6.73322,3.3994,5.13321,6.34537Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <polygon
              points="429.776 309.458 327.357 302.85 335.066 270.913 428.674 291.838 429.776 309.458"
              fill="#cbcbcb"></polygon>
            <path
              d="M494.11389,244.15824l6.424-8.91878s7.18028,2.44014,26.40983,12.01183l1.35857,8.35615L561.685,460.9092,501.01375,458.292l-16.5219-.35153-5.4068-12.12-6.66725,11.86313-16.13421-.34328-16.41693-9.51706,16.179-49.48869,5.23438-45.206-8.0895-42.58883s-10.17937-39.10848,29.027-60.19538Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <path
              d="M630.86271,399.57305a10.48605,10.48605,0,0,1-13.04108-9.40577L581.82654,380.526l14.48005-12.85707,31.9616,11.12669a10.54289,10.54289,0,0,1,2.59452,20.77747Z"
              transform="translate(-127.5 -158.38785)"
              fill="#ffb7b7"></path>
            <path
              d="M614.74112,394.13009a6.14221,6.14221,0,0,1-4.987.39563l-59.21317-22.47383a63.2273,63.2273,0,0,1-34.03214-28.68449l-24.6929-44.04893a19.76509,19.76509,0,1,1,29.49118-26.323L564.04672,340.737l53.7869,31.53448a6.15547,6.15547,0,0,1,2.61747,6.54608l-2.67464,11.33426a6.1431,6.1431,0,0,1-1.86626,3.15032A6.07364,6.07364,0,0,1,614.74112,394.13009Z"
              transform="translate(-127.5 -158.38785)"
              fill="#2f2e41"></path>
            <path
              d="M1071.5,741.38785h-943a1,1,0,0,1,0-2h943a1,1,0,0,1,0,2Z"
              transform="translate(-127.5 -158.38785)"
              fill="#cbcbcb"></path>
          </svg>
          <p
            class="mt-8 text-4xl font-bold tracking-wide text-gray-700 capitalize">
            OOPS!
          </p>
          <p class="mt-4 text-xl text-gray-700 uppercase">
            No car are available at the moment
          </p>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ApiGetCarAvailabel } from "../../api/car";
const route = useRoute();
const router = useRouter();

const availableVerhicles = ref();
onMounted(async () => {
  try {
    const res = await ApiGetCarAvailabel(route.query.search);
    availableVerhicles.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
});

const handleClick = (verhicle) => {
  localStorage.setItem("selectedVerhicle", JSON.stringify(verhicle));
  router.push("/cart");
};
</script>

<style lang="scss" scoped></style>
