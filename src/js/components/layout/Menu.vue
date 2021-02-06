<template>
  <div class="mask fixed top-0 left-0 w-full h-screen z-50 mask-close">
    <aside
      id="main-menu"
      class="fixed bg-white flex flex-col justify-start z-50 overflow-hidden top-0 right-0 menu-close"
    >
      <div class="flex justify-start items-center">
        <div id="menu-close-btn" class="mx-4 mt-4">
          <button
            class="text-white leading-zero focus:outline-none"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.731"
              height="20.731"
              viewBox="0 0 14.731 14.731"
            >
              <g transform="translate(14022.281 14606.262)">
                <line
                  style="
                    fill: none;
                    stroke: #00b7f1;
                    stroke-linecap: round;
                    stroke-width: 2px;
                  "
                  x1="16.833"
                  transform="translate(-14020.867 -14604.848) rotate(45)"
                />
                <line
                  style="
                    fill: none;
                    stroke: #00b7f1;
                    stroke-linecap: round;
                    stroke-width: 2px;
                  "
                  x1="16.832"
                  transform="translate(-14008.965 -14604.848) rotate(135)"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col items-start py-4">
        <a
          href="#"
          class="font-bold hover:bg-primary-100 hover:text-primary-600 mb-8 p-8 py-1 text-primary-500 text-xl transition w-full"
        >
          Trips
        </a>
        <a
          href="#"
          class="font-bold hover:bg-primary-100 hover:text-primary-600 mb-8 p-8 py-1 text-primary-500 text-xl transition w-full"
        >
          News
        </a>
        <a
          href="#"
          class="font-bold hover:bg-primary-100 hover:text-primary-600 mb-8 p-8 py-1 text-primary-500 text-xl transition w-full"
        >
          Gallery
        </a>
        <a
          href="#"
          class="font-bold hover:bg-primary-100 hover:text-primary-600 mb-8 p-8 py-1 text-primary-500 text-xl transition w-full"
        >
          About Us
        </a>
        <a
          href="#"
          class="font-bold hover:bg-primary-100 hover:text-primary-600 mb-8 p-8 py-1 text-primary-500 text-xl transition w-full"
        >
          Contact Us
        </a>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  methods: {
    toggleMenu: function () {
      $("#main-menu").toggleClass("menu-open menu-close");
      $(".mask").toggleClass("mask-open mask-close");
      $("body")[0].style.overflow = "auto";
    },
  },
  computed: {
    menuClasses: function () {
      var theme =
        "fixed bg-gray-200 border-l flex flex-col justify-between z-220 overflow-auto top-0 right-0";
      return theme;
    },
  },
};
</script>
