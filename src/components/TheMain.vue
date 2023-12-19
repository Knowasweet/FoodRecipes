<template>
  <main class="max-w-screen-xl mx-auto px-32">
    <Section>
      <template #title>Popular Categories</template>
      <ul class="flex justify-between gap-2">
        <CategoryItem
          v-for="(category, index) in categories"
          :key="index"
          :title="category"
          :index="index"
        ></CategoryItem>
      </ul>
    </Section>
    <Section>
      <template #title>Super Delicious</template>
      <ul class="grid gap-10 sm:grid-cols-3 sm:grid-rows-2">
        <FeatureRecipe
          v-for="(recRecipe, index) in recommendedRecipes"
          :key="index"
          :title="recRecipe.title"
          :category="recRecipe.category"
          :country="recRecipe.country"
        />
      </ul>
    </Section>
    <Section>
      <template #title>Latest Recipes</template>
      <ul class="grid gap-6 sm:grid-cols-4 sm:grid-rows-6">
        <Recipe
          v-for="(recipe, index) in recipes"
          :key="index"
          :title="recipe.title"
          :img="recipe.img"
        />
      </ul>
    </Section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Section from '@/components/Section.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import FeatureRecipe from '@/components/FeatureRecipe.vue'
import Recipe from '@/components/Recipe.vue'

const categories = ref(['Pasta', 'Pizza', 'Vegan', 'Desserts', 'Smoothies', 'Breakfast'])
const recommendedRecipes = ref([
  { title: 'Yammy Food', category: 'Category', country: 'Country' },
  { title: 'Yammy Food 2', category: 'Category', country: 'Country' },
  { title: 'Yammy Food 3', category: 'Category', country: 'Country' },
  {
    title: 'Yammy Food 4',
    category: 'Category',
    country: 'Country',
  },
  {
    title: 'Yammy Food 5',
    category: 'Category',
    country: 'Country',
  },
  {
    title: 'Yammy Food 6',
    category: 'Category',
    country: 'Country',
  },
])
const recipes = ref([
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake 2',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
  {
    title: 'Caramel Strawberry Milkshake',
    img: '',
  },
])
</script>
