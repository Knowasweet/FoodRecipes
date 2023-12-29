<template>
  <div class="bg-rose">
    <div class="mx-auto max-w-xl py-14 lg:py-24">
      <div class="mx-16 text-center lg:mx-16">
        <h1 class="mb-2 lg:mb-4">Diliciousness to your inbox</h1>
        <div class="mb-3 text-sm lg:mb-6 lg:text-2xl">
          Enjoy weekly hand picked recipes and recommendations
        </div>
      </div>
      <form class="mx-8 lg:mx-0 lg:mb-6">
        <div class="relative">
          <div class="relative">
            <img
              src="@/assets/icons/mail.svg"
              alt="mail"
              class="absolute left-4 top-2.5 block lg:hidden"
            />
            <input
              type="email"
              v-model="email"
              placeholder="Email Address"
              class="mb-3 w-full rounded py-3 pl-12 text-sm focus:outline-none lg:mb-0 lg:rounded-none lg:py-5 lg:pl-2 lg:text-base"
            />
          </div>
          <button
            type="submit"
            class="mb-4 w-full rounded bg-orange py-2 text-base text-white lg:absolute lg:right-0.5 lg:top-0.5 lg:mb-0 lg:w-3/12 lg:rounded-none lg:py-4 lg:text-xl"
          >
            JOIN
          </button>
        </div>
      </form>
      <div class="mx-16 px-2 text-center text-xs lg:mx-0 lg:text-sm">
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
