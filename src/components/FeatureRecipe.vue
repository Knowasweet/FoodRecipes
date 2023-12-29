<template>
  <div class="mx-auto">
    <img src="../assets/img/feature0.svg" alt="FeatureRecipe" class="rounded-t-lg" />
    <div class="rounded-b-lg border-2 border-t-0 border-lightgray px-4 pt-3 lg:pt-4">
      <h4 class="mb-4 line-clamp-2">
        {{ featureRecipe.title }}
      </h4>
      <div class="mb-2 flex gap-4 lg:mb-4">
        <div class="ml-auto flex items-center gap-1">
          <img src="@/assets/icons/tag.svg" alt="Category" class="h-3 w-3" />
          <h6 class="text-gray">{{ featureRecipe.category }}</h6>
        </div>
        <div class="flex items-center gap-1 truncate">
          <img src="@/assets/icons/flag.svg" alt="Country" class="h-3 w-3" />
          <h6 class="text-gray">{{ featureRecipe.country }}</h6>
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
