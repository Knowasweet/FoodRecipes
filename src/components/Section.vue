<template>
  <div>
    <h2 class="mb-4 lg:mb-10">
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
