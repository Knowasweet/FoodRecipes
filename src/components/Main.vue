<template>
  <main class="max-w-screen-xl mx-auto mb-14 px-8 lg:mb-32 lg:px-32">
    <Section title="Popular Categories">
      <div class="mb-8 flex flex-wrap justify-between gap-2 lg:mb-24">
        <Category v-for="category of categories" :key="category.id" :title="category.title" />
      </div>
    </Section>
    <Section title="Super Delicious">
      <div
        class="mb-8 grid grid-cols-1 grid-rows-6 gap-5 lg:mb-20 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10"
      >
        <FeatureRecipe
          v-for="recommendedRecipe of recommendedRecipes"
          :key="recommendedRecipe.id"
          :featureRecipe="recommendedRecipe"
        />
      </div>
    </Section>
    <Section title="Latest Recipes">
      <div
        class="grid-rows-12 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:grid-rows-6 lg:gap-x-6 lg:gap-y-14"
      >
        <LatestRecipe
          v-for="latestRecipe of latestRecipes"
          :key="latestRecipe.id"
          :lastRecipe="latestRecipe"
        />
      </div>
    </Section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Section from '@/components/Section.vue'
import Category from '@/components/Category.vue'
import FeatureRecipe from '@/components/FeatureRecipe.vue'
import LatestRecipe from '@/components/LatestRecipe.vue'

const categories = ref([
  { id: 0, title: 'Pasta' },
  { id: 1, title: 'Pizza' },
  { id: 2, title: 'Vegan' },
  { id: 3, title: 'Desserts' },
  { id: 4, title: 'Smoothies' },
  { id: 5, title: 'Breakfast' },
])
const recommendedRecipes = ref([
  { id: 0, title: 'Yammy Food', category: 'Category', country: 'Country' },
  { id: 1, title: 'Yammy Food 2', category: 'Category', country: 'Country' },
  { id: 2, title: 'Yammy Food 3', category: 'Category', country: 'Country' },
  { id: 3, title: 'Yammy Food 4', category: 'Category', country: 'Country' },
  { id: 4, title: 'Yammy Food 5', category: 'Category', country: 'Country' },
  { id: 5, title: 'Yammy Food 6', category: 'Category', country: 'Country' },
])
const latestRecipes = ref([
  { id: 0, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 1, title: 'Caramel Strawberry Milkshake 2', img: '' },
  { id: 2, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 3, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 4, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 5, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 6, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 7, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 8, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 9, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 10, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 11, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 12, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 13, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 14, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 15, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 16, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 17, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 18, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 19, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 20, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 21, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 22, title: 'Caramel Strawberry Milkshake', img: '' },
  { id: 23, title: 'Caramel Strawberry Milkshake', img: '' },
])
</script>
