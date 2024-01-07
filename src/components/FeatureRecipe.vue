<template>
  <div class="mx-auto">
    <img :src="featureRecipe.img" alt="FeatureRecipe" class="rounded-t-md" />
    <div class="rounded-b-md border-2 border-t-0 border-lightgray px-4 pt-3 md:pt-4">
      <h4 class="md:text-1.5xl mb-4 line-clamp-2 text-xl sm:text-xl">
        {{ featureRecipe.title }}
      </h4>
      <div class="mb-2 flex gap-4 md:mb-4">
        <div class="ml-auto flex items-center gap-1">
          <img src="@/assets/icons/tag.svg" alt="Category" class="h-3 w-3" />
          <h6 class="xl:text-base text-sm text-gray">{{ featureRecipe.category }}</h6>
        </div>
        <div class="flex items-center gap-1 truncate">
          <img src="@/assets/icons/flag.svg" alt="Country" class="h-3 w-3" />
          <h6 class="xl:text-base text-sm text-gray lg:text-sm">
            {{ featureRecipe.country }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  featureRecipe: {
    type: Object,
    required: true,
  },
})
</script>
