<template>
  <div>
    <slot :currentSlide="currentSlide"></slot>
    <span class="absolute bottom-72" @click.prevent="prevSlide">
      <img src="@/assets/icons/chevron-left.svg" alt="chevronLeft" class="bg-lightgray p-2" />
    </span>
    <span class="absolute bottom-72 right-0" @click.prevent="nextSlide">
      <img src="@/assets/icons/chevron-right.svg" alt="chevronRight" class="bg-lightgray p-2" />
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
