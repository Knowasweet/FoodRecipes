<template>
  <div class="mb-6 md:mb-20">
    <main class="custom-container mb-14 md:mb-24 lg:mb-28 xl:mb-32">
      <Section title="Popular Categories">
        <div
          class="mb-8 flex flex-wrap justify-between gap-4 md:mb-16 md:justify-around lg:mb-24 xl:justify-between"
        >
          <Category v-for="category of categories" :key="category.id" :category="category" />
        </div>
      </Section>
      <Section title="Super Delicious">
        <div
          class="mb-8 grid grid-cols-1 grid-rows-6 gap-5 sm:grid-cols-2 sm:grid-rows-3 md:mb-16 lg:mb-20 lg:grid-cols-3 lg:grid-rows-2 xl:gap-10"
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
          class="grid-rows-12 md:grid-rows-8 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-x-4 md:gap-y-10 xl:grid-cols-4 xl:grid-rows-6 xl:gap-x-6 xl:gap-y-14"
        >
          <LatestRecipe
            v-for="latestRecipe of latestRecipes"
            :key="latestRecipe.id"
            :lastRecipe="latestRecipe"
          />
        </div>
      </Section>
    </main>
    <NotificationForm />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import Section from '@/components/Section.vue'
import Category from '@/components/Category.vue'
import FeatureRecipe from '@/components/FeatureRecipe.vue'
import LatestRecipe from '@/components/LatestRecipe.vue'
import NotificationForm from '@/components/NotificationForm.vue'
import axios from '@/services/axios/httpFoodRecipes'

const categories = ref([])
const recommendedRecipes = ref(new Set())
const latestRecipes = ref([])

onBeforeMount(async () => {
  try {
    //first request
    const resCategories = (await axios.get('/categories.php')).data.categories
    for (const category of resCategories) {
      categories.value.push({
        id: category.idCategory,
        title: category.strCategory,
        img: category.strCategoryThumb,
      })
    }
  } catch (e) {
    console.log('Error fetching categories data', e)
  }
})

onBeforeMount(async () => {
  try {
    //second request
    while (recommendedRecipes.value.size < 12) {
      const resRandom = (await axios.get('/random.php')).data.meals ?? null
      if (resRandom !== null) {
        const recipe = resRandom[0]
        recommendedRecipes.value.add({
          id: recipe.idMeal,
          title: recipe.strMeal,
          img: recipe.strMealThumb,
          category: recipe.strCategory,
          country: recipe.strArea,
        })
      }
    }
  } catch (e) {
    console.log('Error fetching recommended recipes data', e)
  }
})

onBeforeMount(async () => {
  try {
    //third request
    for (let i = 0, resFailed = 0; i < 24 + resFailed; i++) {
      const resLatest =
        (await axios.get(`/lookup.php?i=${53000 - i - resFailed}`)).data.meals ?? null
      if (resLatest !== null) {
        const recipe = resLatest[0]
        latestRecipes.value.push({
          id: recipe.idMeal,
          title: recipe.strMeal,
          img: recipe.strMealThumb,
        })
      } else {
        resFailed++
      }
    }
  } catch (e) {
    console.log('Error fetching latest recipes data', e)
  }
})
</script>
