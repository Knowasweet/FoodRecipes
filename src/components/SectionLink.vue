<template>
  <div
    class="flex flex-row items-center justify-between gap-3 md:flex-col md:items-start md:justify-start"
  >
    <h5 class="lg:text-lg text-md font-inter opacity-50 md:mb-1 md:text-base">
      {{ section.title }}
    </h5>
    <div class="hidden flex-col gap-4 md:flex" v-for="(link, index) in section.links" :key="index">
      <RouterLink to="#" class="text-md text-gray">{{ link }}</RouterLink>
    </div>
    <img alt="Arrow Down" src="@/assets/icons/chevron-down.svg" class="block md:hidden" />
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
