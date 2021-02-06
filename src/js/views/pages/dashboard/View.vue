<template>
  <div
    class="w-full flex flex-col justify-start items-start tracking-wider"
    style="background-color: #011627"
  >
    <div class="h-screen w-full p-6" :style="coverStyles">
      <div class="h-full container mx-auto px-10">
        <div class="w-full h-full flex flex-col justify-between">
          <div class="w-full flex justify-between items-center">
            <div class="text-white font-bold" v-text="'.NT'" />
            <div class="flex justify-start items-center -mx-2">
              <img src="/assets/icons/search.svg" class="mx-2" />
              <dl-button text="Menu" class="mx-2" />
            </div>
          </div>
          <div class="w-full flex flex-col justify-center items-center">
            <div
              class="text-8xl text-white font-bold leading-relaxed"
              v-text="'Night Trips'"
            />
            <div
              class="text-white font-bold mb-8"
              v-text="'WE GOT TRIPS FOR THE TRIPPSTER IN YOU'"
            />
            <div class="w-full max-w-md text-white text-sm">
              {{
                "Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper."
              }}
            </div>
          </div>
          <div class="flex justify-end items-center mb-16">
            <div class="flex flex-col items-start">
              <img src="/assets/icons/twitter.svg" class="mb-2" />
              <img src="/assets/icons/instagram.svg" class="mb-2" />
              <img src="/assets/icons/facebook.svg" class="mb-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full" :styles="pickStyles">
      <div class="container mx-auto px-16 mb-8">
        <div class="w-full flex justify-start items-center -mx-2 mb-8 pt-10">
          <div
            class="text-white text-6xl font-bold mx-2"
            v-text="'Pick your trip'"
          />
          <div
            class="text-white text-sm mx-2 max-w-xs"
            v-text="
              'Our team put together some trips to you to discover, feel free to discover each of them.'
            "
          />
        </div>
        <ul class="list-reset flex flex-wrap justify-start items-center mb-6">
          <li
            @click="
              activeTripIndex = index;
              activeTripImageIndex = 0;
            "
            :class="`w-full sm:w-3/12 cursor-pointer transition hover:text-primary-400 hover:border-2 hover:border-primary-400 px-8 py-6 ${
              activeTripIndex == index
                ? 'font-bold text-primary-400 border-b-2 border-primary-400'
                : 'text-gray-200 border-b border-primary-50'
            }`"
            v-for="(trip, index) in trips"
            :key="index"
          >
            <a class="focus:outline-none" v-text="trip.name" />
          </li>
        </ul>
        <div
          class="w-full flex justify-start items-center mb-16 -mx-8 relative"
          v-if="activeTrip != {}"
        >
          <img
            class="absolute"
            src="/assets/images/Dots.svg"
            style="left: -21px; bottom: -49px"
          />
          <img
            src="/assets/images/Gimmick line.svg"
            class="absolute z-50"
            style="top: 40px; left: -20px"
          />
          <div
            class="absolute max-w-xs text-sm z-50 flex flex-col"
            style="top: 55px; left: -20px"
            v-if="activeTrip.images && activeTrip.images.length"
          >
            <div class="text-primary-400">
              {{
                `${activeTripImageIndex > 9 ? "" : "0"}${
                  activeTripImageIndex + 1
                } -`
              }}
            </div>
            <div class="text-white">
              {{ activeTrip.images[activeTripImageIndex].name }}
            </div>
          </div>
          <div
            class="w-80 h-80 relative overflow-hidden mx-8"
            v-if="activeTrip.images && activeTrip.images.length"
          >
            <div
              v-for="(image, index) in activeTrip.images"
              :key="index"
              :class="`absolute inset-0 w-80 h-80 rounded transition-all ease-in-out duration-1000 transform slide ${
                index == 0 ? 'translate-x-0' : 'translate-x-full'
              }`"
            >
              <img :src="`/assets/images/${image.image}`" class="w-80 h-80" />
            </div>
            <div
              @click="
                activeTripImageIndex < activeTrip.images.length - 1
                  ? nextSlide()
                  : noOp()
              "
              :class="`absolute bottom-0 right-0 w-12 h-12 text-white flex items-center justify-center ${
                activeTripImageIndex < activeTrip.images.length - 1
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed'
              }`"
              style="background-color: #011627"
            >
              &#x276F;
            </div>
            <div
              @click="activeTripImageIndex > 0 ? previousSlide() : noOp()"
              :class="`absolute bottom-0 right-0 w-12 h-12 text-white mr-12 border-r border-primary-300 flex items-center justify-center ${
                activeTripImageIndex > 0
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed'
              }`"
              style="background-color: #011627"
            >
              &#x276E;
            </div>
          </div>
          <div class="flex flex-col items-start mx-8">
            <div
              class="text-white text-5xl font-bold leading-loose"
              v-text="activeTrip.name"
            />
            <div
              class="max-w-sm mb-8 text-sm text-white w-full"
              v-html="activeTrip.description"
            />
            <dl-button text="SEE OUR LATEST OFFER" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tripsData from "../../../../data/trips.json";
export default {
  data: function () {
    return {
      trips: [],
      activeTripIndex: 0,
      activeTripImageIndex: 0,
    };
  },
  mounted: function () {
    this.trips = tripsData.trips;
  },
  methods: {
    nextSlide: function () {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      if (!activeSlide) {
        return;
      }
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("-translate-x-full");

      let nextSlide = activeSlide.nextElementSibling;
      nextSlide.classList.remove("translate-x-full");
      nextSlide.classList.add("translate-x-0");
      this.activeTripImageIndex++;
    },
    previousSlide: function () {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      if (!activeSlide) {
        return;
      }
      activeSlide.classList.remove("translate-x-0");
      activeSlide.classList.add("translate-x-full");

      let previousSlide = activeSlide.previousElementSibling;
      previousSlide.classList.remove("-translate-x-full");
      previousSlide.classList.add("translate-x-0");
      this.activeTripImageIndex--;
    },
    noOp: function () {
      return;
    },
  },
  computed: {
    coverStyles: function () {
      var theme = "";
      theme += " overflow: hidden;";
      theme += " background-size: cover;";
      theme += " background-position: center;";
      theme += ' background-image: url("/assets/images/cover.png");';
      return theme;
    },
    pickStyles: function () {
      var theme = "";
      theme += " overflow: hidden;";
      theme += " background-size: cover;";
      theme += " background-position: center;";
      theme += ' background-image: url("/assets/images/lights.svg");';
      return theme;
    },
    activeTrip: function () {
      if (this.activeTripIndex == null || !this.trips.length) {
        return {};
      }
      return this.trips[this.activeTripIndex];
    },
  },
};
</script>