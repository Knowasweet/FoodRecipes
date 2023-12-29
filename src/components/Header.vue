<template>
  <header class="mb-8 lg:mb-24">
    <HeaderMobile />
    <div class="hidden lg:block">
      <div
        class="mb-5 mt-5 flex w-full items-center justify-between gap-8 border-2 px-44 py-3 shadow shadow-black"
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
      <div class="relative">
        <Carousel #default="{ currentSlide }">
          <Slide v-for="slide of carouselSlides" :key="slide.id">
            <div v-show="currentSlide === slide.id" class="relative">
              <img :src="imgPath(slide.id)" alt="Slider0" />
              <div class="absolute bottom-16 left-44 flex flex-col gap-2">
                <div class="flex items-center gap-1 text-white">
                  <img src="@/assets/icons/trending-up.svg" alt="trending" class="h-3.5 w-3.5" />
                  <div class="text-xs">{{ slide.percent }}% would make this again</div>
                </div>
                <h1 class="w-4/6">{{ slide.title }}</h1>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </header>
</template>

<script setup>
import Slide from '@/components/Slide.vue'
import { ref } from 'vue'
import Carousel from '@/components/Carousel.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'

const carouselSlides = ref([
  {
    id: 0,
    title: 'Cinnamon Apple Loaded Tart',
    percent: '85',
  },
  {
    id: 1,
    title: 'Cinnamon Apple Loaded Tart 2',
    percent: '82',
  },
])

const imgPath = (indexImg) => {
  return new URL(`../assets/img/headerSlider${indexImg}.svg`, import.meta.url)
}
</script>
