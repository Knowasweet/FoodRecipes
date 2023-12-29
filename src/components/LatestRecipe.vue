<template>
  <div>
    <img
      src="../assets/img/feature0.svg"
      alt="recipe"
      class="mb-1 rounded-lg border-2 border-transparent lg:mb-2"
    />
    <h4 class="line-clamp-2">
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
