<template>
  <div class="block lg:hidden">
    <div class="fixed z-10 w-80 bg-white">
      <div class="mx-8 flex items-center justify-between">
        <img src="@/assets/icons/search.svg" alt="search" class="h-4 w-4" />
        <img alt="App logo" src="@/assets/icons/logo.svg" class="h-12 w-16" />
        <button @click="toggleMenu" class="cursor-pointer">
          <img
            alt="burger"
            src="@/assets/icons/menu.svg"
            class="h-4 w-4"
            :class="{ hidden: isOpen }"
          />
          <img
            alt="close"
            src="@/assets/icons/x.svg"
            class="h-4 w-4 rounded-full border-gray hover:border-2"
            :class="{ hidden: !isOpen }"
          />
        </button>
      </div>
    </div>
    <MenuBurger :isOpen="isOpen" />
    <div class="relative pt-12 text-white">
      <img src="@/assets/img/headerImgMobile.svg" alt="MobileSlider" />
      <div class="absolute bottom-8 left-8 flex flex-col gap-2">
        <div class="flex items-center gap-1">
          <img src="@/assets/icons/trending-up.svg" alt="trending" class="h-3.5 w-3.5" />
          <div class="text-xs">85% would make this again</div>
        </div>
        <h1>Strawberry Cream Milkshake</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuBurger from '@/components/MenuBurger.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
