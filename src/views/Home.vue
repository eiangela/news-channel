<script setup>
import { useAppStore } from "../store/app";
import CardAction from "../components/CardAction.vue";


const appStore = useAppStore();

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="appStore.fetchArticles">Carregar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="3"
        v-for="article in appStore.articles"
        :key="article.title"
      >
        <CardAction
          :title="article.title"
          :description="article.description"
          :source="article.source.name"
          :image-url="article.urlToImage"
          :link="article.url"
          class="card-text"
        />
      </v-col>
    </v-row>
  </v-container>
</template>



<style></style>
