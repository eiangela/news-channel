// Utilities
import { defineStore } from 'pinia'
import { ref, toRefs } from "vue";
import axios from 'axios';

export const useAppStore = defineStore('app', () => {

  const articles = ref([])

  async function fetchArticles() {
    const response = await axios.get("https://newsapi.org/v2/everything?language=pt&q=apple&apiKey=e72108fa61f04965861d5b81eded0d9f");
    articles.value = response.data.articles.slice(0 , 16);
  }

  return {
    articles,
    fetchArticles
  };
});