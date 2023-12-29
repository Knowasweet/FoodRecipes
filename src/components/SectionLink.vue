<template>
  <div
    class="flex flex-row items-center justify-between gap-5 lg:flex-col lg:items-start lg:justify-start"
  >
    <h5>{{ section.title }}</h5>
    <div class="hidden flex-col gap-4 lg:flex" v-for="(link, index) in section.links" :key="index">
      <RouterLink to="#" class="text-base text-gray">{{ link }}</RouterLink>
    </div>
    <img alt="Arrow Down" src="@/assets/icons/chevron-down.svg" class="block lg:hidden" />
  </div>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
})
</script>
