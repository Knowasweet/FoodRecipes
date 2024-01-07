<template>
  <div class="block md:hidden">
    <div class="sticky bg-white">
      <div class="mx-8 flex items-center justify-between">
        <img src="@/assets/icons/search.svg" alt="search" class="h-4 w-4 sm:h-8 sm:w-8" />
        <img alt="App logo" src="@/assets/icons/logo.svg" class="h-12 w-16 sm:h-20 sm:w-32" />
        <button @click="toggleMenu" class="cursor-pointer">
          <img
            alt="burger"
            src="@/assets/icons/menu.svg"
            class="h-4 w-4 sm:h-8 sm:w-8"
            :class="{ hidden: isOpen }"
          />
          <img
            alt="close"
            src="@/assets/icons/x.svg"
            class="h-4 w-4 rounded-full border-gray hover:border-2 sm:h-8 sm:w-8"
            :class="{ hidden: !isOpen }"
          />
        </button>
      </div>
    </div>
    <MenuBurger :isOpen="isOpen" />
    <div class="relative flex"></div>
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
