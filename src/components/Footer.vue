<template>
  <NotificationForm class="mb-4 lg:mb-16" />
  <div class="lg:mx-32">
    <div class="mb-10 flex flex-col justify-between lg:mb-14 lg:flex-row">
      <div class="mb-6 w-full lg:mb-0 lg:w-5/12">
        <img
          alt="App logo"
          src="@/assets/icons/logo.svg"
          class="mb-0 h-10 w-16 lg:mb-2 lg:h-20 lg:w-40"
        />
        <div class="lg:last: :block text-sm text-gray lg:text-xl">
          <span class="lg:block">On the other hand, we denounce with</span>
          <span>
            righteous indignation and dislike men who are so beguiled and demoralized by the charms
            of pleasure of the moment
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-6 lg:flex-row lg:gap-24">
        <SectionLink v-for="link of links" :section="link" :key="link.id" />
      </div>
    </div>
    <div class="mb-14 flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-0">
      <div class="text-xs text-gray lg:text-sm">© 2023 Tastebite - All rights reserved</div>
      <div class="flex items-center justify-start gap-8 lg:justify-between lg:gap-14">
        <RouterLink to="#"
          ><img src="@/assets/icons/facebook.svg" alt="facebook" class="h-3.5 w-3.5 lg:h-5 lg:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img src="@/assets/icons/twitter.svg" alt="twitter" class="h-3.5 w-3.5 lg:h-5 lg:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img
            src="@/assets/icons/instagram.svg"
            alt="instagram"
            class="h-3.5 w-3.5 lg:h-5 lg:w-5"
        /></RouterLink>
        <RouterLink to="#"
          ><img src="@/assets/icons/youtube.svg" alt="youtube" class="h-3.5 w-3.5 lg:h-5 lg:w-5"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import NotificationForm from '@/components/NotificationForm.vue'
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
