<template>
  <div class="custom-container">
    <div class="mb-10 flex flex-col justify-between md:mb-16 md:flex-row">
      <div class="mb-6 md:mb-0 md:w-4/12">
        <img
          alt="App logo"
          src="@/assets/icons/logo.svg"
          class="h-10 w-24 md:mb-2 md:h-16 md:w-36"
        />
        <div class="text-sm opacity-30 lg:text-md xl:text-lg">
          <span class="md:block">On the other hand, we denounce with</span>
          <span>
            righteous indignation and dislike men who are so beguiled and demoralized by the charms
            of pleasure of the moment
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-6 md:flex-row md:gap-24">
        <SectionLink v-for="link of links" :section="link" :key="link.id" />
      </div>
    </div>
    <div class="mb-14 flex flex-col-reverse justify-between gap-4 md:flex-row md:gap-0">
      <div class="text-xs text-gray md:text-sm">© 2023 Tastebite - All rights reserved</div>
      <div class="flex items-center justify-start gap-8 md:justify-between md:gap-14">
        <RouterLink to="#"
          ><img src="@/assets/icons/facebook.svg" alt="facebook" class="h-3.5 w-3.5 md:h-5 md:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img src="@/assets/icons/twitter.svg" alt="twitter" class="h-3.5 w-3.5 md:h-5 md:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img
            src="@/assets/icons/instagram.svg"
            alt="instagram"
            class="h-3.5 w-3.5 md:h-5 md:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img src="@/assets/icons/youtube.svg" alt="youtube" class="h-3.5 w-3.5 md:h-5 md:w-5"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionLink from '@/components/SectionLink.vue'
import { ref } from 'vue'

const links = ref([
  {
    id: 0,
    title: 'Tastebite',
    links: ['About us', 'Careers', 'Contact us', 'Feedback'],
  },
  {
    id: 1,
    title: 'Legal',
    links: ['Terms', 'Conditions', 'Cookies', 'Copyright'],
  },
  {
    id: 2,
    title: 'Follow',
    links: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
  },
])
</script>
