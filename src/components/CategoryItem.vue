<template>
  <div class="text-center">
    <img
      src="@/assets/img/section1.svg"
      alt="Section"
      width="160"
      height="160"
      class="rounded-full"
    />
    <p class="pt-4 text-base font-semibold">
      <slot>{{ title }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<style scoped></style>
