<template>
  <header class="mb-8 md:mb-14 lg:mb-20 xl:mb-24">
    <HeaderMobile />
    <div>
      <div class="hidden md:block">
        <div
          class="mb-5 mt-5 flex items-center justify-between gap-8 border-2 py-3 shadow shadow-black md:px-24 lg:px-32 xl:px-44"
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
      </div>

      <div class="hidden md:block">
        <div class="mx-auto mt-16 max-w-xs">
          <img alt="App logo" src="@/assets/icons/logo.svg" width="255" height="78" />
        </div>
        <div class="mx-auto my-14 max-w-md px-6">
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
      </div>

      <div class="relative">
        <Carousel>
          <div v-for="slide of carouselSlides" :key="slide.id">
            <div class="relative">
              <img
                :src="slide.img"
                alt="Slider0"
                class="w-full sm:h-[375px] md:h-[834px] lg:h-[634px]"
              />
              <div
                class="absolute bottom-1/4 left-1/4 flex -translate-x-1/4 translate-y-1/2 flex-col gap-2 text-white md:left-1/3 md:-translate-x-1/3 md:translate-y-1/3"
              >
                <RouterLink :to="slide.youtube">
                  <div class="flex items-center gap-1">
                    <img src="@/assets/icons/youtube.svg" alt="trending" class="h-3.5 w-3.5" />
                    <div class="text-sm lg:text-base">YouTube</div>
                  </div>
                </RouterLink>
                <h1
                  class="line-clamp-2 w-5/6 text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl xl:text-5xl"
                >
                  {{ slide.title }}
                </h1>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Carousel from '@/components/Carousel.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import axios from '@/services/axios/httpFoodRecipes'

const carouselSlides = ref([])

onBeforeMount(async () => {
  const resSlider = (await axios.get('/random.php')).data.meals[0]
  carouselSlides.value.push({
    id: resSlider.idMeal,
    title: resSlider.strMeal,
    img: resSlider.strMealThumb,
    youtube: resSlider.strYoutube,
  })
})

console.log(carouselSlides)
</script>
