import axios from 'axios'

const foodRecipes = axios.create({
  baseURL: 'https://themealdb.com/api/json/v1/1',
  timeout: 5000, // Set timeout if needed
})

export default foodRecipes
