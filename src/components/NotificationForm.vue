<template>
  <div class="bg-rose">
    <div class="mx-auto max-w-xl py-14 md:py-24">
      <div class="mx-6 text-center sm:mx-10 md:mx-10">
        <h1 class="md:text-4.5xl text-2.5xl sm:text-3.5xl mb-2 sm:mb-4 lg:text-5xl">
          Diliciousness to your inbox
        </h1>
        <div class="xl:text-1.5xl mb-3 text-sm md:mb-6 md:text-base lg:text-xl">
          Enjoy weekly hand picked recipes and recommendations
        </div>
      </div>
      <form class="mx-8 md:mx-0 md:mb-6">
        <div class="relative">
          <div class="relative">
            <img
              src="@/assets/icons/mail.svg"
              alt="mail"
              class="absolute left-4 top-2.5 block md:hidden"
            />
            <input
              type="email"
              v-model="email"
              placeholder="Email Address"
              class="mb-3 w-full rounded py-3 pl-12 text-sm focus:outline-none md:mb-0 md:rounded-none md:py-5 md:pl-2 md:text-base"
            />
          </div>
          <button
            type="submit"
            class="md:text-lg mb-4 w-full rounded bg-orange py-2 text-base text-white md:absolute md:right-0.5 md:top-0.5 md:mb-0 md:w-3/12 md:rounded-none md:py-4"
          >
            JOIN
          </button>
        </div>
      </form>
      <div class="xl:text-md mx-16 px-2 text-center text-xs md:mx-0 md:text-sm">
        By joining our newsietter you agree to our
        <RouterLink to="#" class="border-b-2 border-orange border-opacity-50 pb-0.5"
          >Terms and Conditions
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref()
</script>
