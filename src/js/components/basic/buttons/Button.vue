<template>
  <button :type="type" :name="name" :id="id" :class="classes">
    <span v-if="text != null" v-text="text ? text : ''" />
  </button>
</template>
<script>
export default {
  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      required: true,
    },
    dtTheme: {
      type: String,
      default: "primary",
    },
    dtPadding: {
      type: String,
      default: "medium",
    },
    dtTextSize: {
      type: String,
      default: "medium",
    },
    dtDesign: {
      type: String,
      default: "primary",
    },
    dtRounded: {
      type: String,
      default: "full",
    },
    dtLeading: {
      type: String,
      default: "normal",
    },
    dtTransition: {
      type: String,
      default: "default",
    },
  },
  data: function () {
    return {
      themes: {
        primary: {
          primary:
            "border border-primary-400 bg-primary-400 shadow-sm text-white hover:bg-primary-700 hover:border-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400",
          danger:
            "border border-red-400 bg-red-400 shadow-sm text-white hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400",
          disabled:
            "border border-gray-300 bg-gray-300 shadow-sm text-gray-700 cursor-not-allowed",
        },
        flat: {
          primary: "text-primary-400 hover:text-primary-600",
          success: "text-primary-400 hover:text-primary-600",
          danger: "text-red-400 hover:text-red-600",
          disabled: "text-gray-400 cursor-not-allowed",
        },
        secondary: {
          primary:
            "border border-primary-200 bg-primary-200 shadow-sm text-primary-600 hover:bg-primary-400 hover:text-primary-100 hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400",
          white:
            "border border-gray-200 bg-gray-200 shadow-sm text-gray-600 hover:bg-gray-400 hover:text-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400",
          danger:
            "border border-red-200 bg-red-200 shadow-sm text-red-600 hover:bg-red-400 hover:text-red-100 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400",
          disabled:
            "border border-gray-300 bg-gray-300 text-gray-700 cursor-not-allowed",
        },
        auxiliary: {
          primary:
            "border border-gray-200 bg-gray-50 shadow-sm text-gray-600 hover:bg-gray-100 hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400",
          white:
            "border-2 border-white shadow-sm text-white hover:text-primary-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-primary-400 focus:ring-white",
          danger:
            "border border-gray-200 bg-gray-50 shadow-sm text-gray-600 hover:bg-gray-100 hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400",
          disabled:
            "border border-gray-300 bg-gray-300 text-gray-700 cursor-not-allowed",
        },
      },
      size: {
        "2x-large": "px-12 sm:px-16",
        "x-large": "px-10 sm:px-12",
        large: "px-6 sm:px-8",
        medium: "px-4 sm:px-6",
        small: "px-2 sm:px-4",
        none: "",
      },
      padding: {
        large: "py-4 px-10",
        medium: "py-2 px-8",
        small: "py-1 px-2",
      },
      textSize: {
        large: "text-base sm:text-xl",
        medium: "text-sm sm:text-base",
        small: "text-xs sm:text-sm",
      },
      rounded: {
        default: "rounded",
        medium: "rounded-md",
        full: "rounded-full",
        none: "",
      },
      transition: {
        default: "transition",
        none: "",
      },
      leading: {
        none: "leading-none",
        tight: "leading-tight",
        normal: "leading-normal",
        loose: "leading-loose",
      },
    };
  },
  computed: {
    classes: function () {
      var theme =
        "focus:outline-none flex justify-center items-center capitalize";
      theme += " " + this.themes[this.dtDesign][this.dtTheme];
      theme += " " + this.padding[this.dtPadding];
      theme += " " + this.textSize[this.dtTextSize];
      theme += " " + this.rounded[this.dtRounded];
      theme += " " + this.transition[this.dtTransition];
      theme += " " + this.leading[this.dtLeading];
      theme += " " + this.leading[this.dtLeading];

      return theme;
    },
  },
};
</script>