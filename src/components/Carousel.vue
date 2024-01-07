<template>
  <div>
    <slot :currentSlide="currentSlide"></slot>
    <span class="absolute top-1/2 hidden -translate-y-1/2 md:block" @click.prevent="prevSlide">
      <img
        src="@/assets/icons/chevron-left.svg"
        alt="chevronLeft"
        class="bg-lightgray md:p-1 lg:p-2"
      />
    </span>
    <span
      class="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block"
      @click.prevent="nextSlide"
    >
      <img
        src="@/assets/icons/chevron-right.svg"
        alt="chevronRight"
        class="bg-lightgray md:p-1 lg:p-2"
      />
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const prevSlide = () => {
  if (currentSlide.value === 0) {
    currentSlide.value = 1
    return
  }
  currentSlide.value -= 1
}

const nextSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 0
    return
  }
  currentSlide.value += 1
}
</script>
