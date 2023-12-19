<template>
  <div class="rounded-lg border-2 border-lightgray">
    <img
      src="../assets/img/feature0.svg"
      alt="FeatureRecipe"
      height="280"
      class="z-10 w-full rounded-t-lg border-2 border-transparent"
    />
    <div class="mx-6 w-80 pt-6">
      <p class="line-clamp-2 text-xl font-semibold">
        {{ title }}
      </p>
      <div class="flex justify-end py-4">
        <div class="w-30 mr-6 inline-block truncate">
          <img src="@/assets/icons/tag.svg" alt="Category" class="inline-block" />
          {{ category }}
        </div>
        <div class="w-30 inline-block truncate">
          <img src="@/assets/icons/flag.svg" alt="Country" class="inline-block" />
          {{ country }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  category: String,
  country: String,
})
</script>

<style scoped></style>
