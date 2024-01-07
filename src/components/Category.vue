<template>
  <div>
    <img
      :src="category.img"
      alt="Section"
      class="h-18 mb-1 w-32 rounded-full md:mb-4 md:h-32 md:w-52 lg:h-40 lg:w-60"
    />
    <h4 class="md:text-lg xl:mb-0 mb-2 text-center md:mb-2 lg:text-xl">
      {{ category.title }}
    </h4>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>
