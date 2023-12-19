<template>
  <div>
    <img
      src="../assets/img/feature0.svg"
      alt="recipe"
      height="140"
      class="w-full rounded-lg border-2 border-transparent"
    />
    <div class="w-50 mb-16 pt-2">
      <p class="line-clamp-2 text-xl font-semibold">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
})
</script>

<style scoped></style>
