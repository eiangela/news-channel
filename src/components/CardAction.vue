<template>
  <v-card height="360px">
    <v-img
      :src="imageUrl"
      height="170px"
      cover
      class="bg-grey-lighten-2"
    ></v-img>
    <v-card-title class="text-h6 main-title">{{ title }}</v-card-title>
    <div class="main-text">
      {{ getDescriptionLimited(95) }}
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn 
        variant="tonal"
        :href="link"
        target="_blank"
      >
        Ler mais
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardAction",
  props: {
    title: String,
    description: String,
    source: String,
    imageUrl: String,
    link: String,
  },
  methods: {
    getDescriptionLimited(length) {
      if (this.description.length <= length) {
        return this.description;
      }
      return this.description.substring(0, length).trim() + "...";
    },
    
  },
};
</script>

<style scoped lang="scss">

.main-title {
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  line-height: 18px !important;
  color: #2e2e2e;
  white-space: normal;
  min-height: 70px;
}

.main-text {
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  line-height: 18px !important;
  color: #666;
  padding: 0.5rem 1rem;
  text-align: justify;
}
</style>
