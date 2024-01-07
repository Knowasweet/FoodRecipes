<template>
  <div>
    <h2 class="xl:text-3xl lg:text-2.5xl text-1.5xl mb-4 md:mb-10 md:text-2xl">
      {{ title }}
    </h2>
    <slot></slot>
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
