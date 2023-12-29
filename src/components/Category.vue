<template>
  <div>
    <img
      src="@/assets/img/section1.svg"
      alt="Section"
      class="mb-1 h-20 w-20 rounded-full lg:mb-4 lg:h-40 lg:w-40"
    />
    <h4 class="mb-2 text-center lg:mb-0">
      {{ title }}
    </h4>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
