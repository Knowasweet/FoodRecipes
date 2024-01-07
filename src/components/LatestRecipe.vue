<template>
  <div>
    <img
      :src="lastRecipe.img"
      alt="recipe"
      class="mb-1 rounded-md border-2 border-transparent md:mb-2"
    />
    <h4 class="sm:text-md line-clamp-2 text-sm md:text-base lg:text-xl">
      {{ lastRecipe.title }}
    </h4>
  </div>
</template>

<script setup>
defineProps({
  lastRecipe: {
    type: Object,
    required: true,
  },
})
</script>
