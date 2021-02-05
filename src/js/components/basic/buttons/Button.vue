<template>
  <div>
    <h1 v-text="message"></h1>
    <button class="font-bold py-2 px-4 rounded m-1" :class="type">
      <span v-if="icon" class="m-1">
        <img alt="Logo" :src="getImgUrl(icon)" class="w-5 h-5" />
      </span>
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      themes: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',

      }
    };
  },
  methods: {
  },
};
</script>
