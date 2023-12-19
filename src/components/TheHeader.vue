<template>
  <header>
    <div
      class="mt-5 flex w-full items-center justify-between gap-8 border-2 px-44 py-3 shadow shadow-black"
    >
      <div class="flex items-center justify-between gap-8">
        <a href="#"><img src="@/assets/icons/facebook.svg" alt="facebook" /></a>
        <a href="#"><img src="@/assets/icons/twitter.svg" alt="twitter" /></a>
        <a href="#"><img src="@/assets/icons/instagram.svg" alt="instagram" /></a>
      </div>
      <div class="ml-auto">
        <button>
          <img src="@/assets/icons/search.svg" alt="search" />
        </button>
      </div>
      <button class="rounded-t-sm border-2 px-6 py-1">Login</button>
    </div>
    <div class="mx-auto mt-16 max-w-xs">
      <img alt="App logo" src="@/assets/icons/logo.svg" width="255" height="78" />
    </div>
    <div class="mx-auto my-14 max-w-lg px-6">
      <div class="flex items-center justify-between">
        <RouterLink to="#" class="border-b-2 border-transparent hover:border-black">
          Homepage
        </RouterLink>
        <RouterLink to="#" class="border-b-2 border-transparent hover:border-black">
          Recipe Page
        </RouterLink>
        <RouterLink to="#" class="border-b-2 border-transparent hover:border-black">
          Pages
        </RouterLink>
        <RouterLink to="#" class="border-b-2 border-transparent hover:border-black">
          Buy
        </RouterLink>
      </div>
    </div>

    <div class="relative text-black">
      <Carousel v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index">
            <img :src="imgPath(index)" alt="Slider0" class="w-full" height="634" />
            <div class="absolute bottom-20 left-40">
              <img src="@/assets/icons/trending-up.svg" alt="trending" class="inline-block pr-2" />
              <p class="inline-block">{{ slide.percent }}% would make this again</p>
              <p class="w-5/6 font-playfair text-7xl font-bold">{{ slide.title }}</p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </header>
</template>

<script setup>
import Slide from '@/components/Slide.vue'
import { ref } from 'vue'
import Carousel from '@/components/Carousel.vue'

const carouselSlides = ref([
  {
    title: 'Cinnamon Apple Loaded Tart',
    percent: '85',
  },
  {
    title: 'Cinnamon Apple Loaded Tart 2',
    percent: '82',
  },
])

const imgPath = (indexImg) => {
  return new URL(`../assets/img/headerSlider${indexImg}.svg`, import.meta.url)
}
</script>
