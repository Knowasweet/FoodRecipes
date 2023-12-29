<template>
  <div class="fixed z-10 mt-12 w-80" :class="{ hidden: !isOpen }">
    <div class="flex justify-end">
      <div class="rounded-bl bg-gray py-2">
        <div class="mx-4 flex flex-col items-center justify-between gap-4">
          <RouterLink
            to="#"
            class="border-b-2 border-transparent text-xs text-white hover:border-rose"
          >
            Homepage
          </RouterLink>
          <RouterLink
            to="#"
            class="border-b-2 border-transparent text-xs text-white hover:border-rose"
          >
            Recipe Page
          </RouterLink>
          <RouterLink
            to="#"
            class="border-b-2 border-transparent text-xs text-white hover:border-rose"
          >
            Pages
          </RouterLink>
          <RouterLink
            to="#"
            class="border-b-2 border-transparent text-xs text-white hover:border-rose"
          >
            Buy
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})
</script>
