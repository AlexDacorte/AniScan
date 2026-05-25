<template>
  <div class="home-view">
    <HeroSection></HeroSection>
    <v-container class="list-container">
      <v-row>
        <v-col
          v-for="data in animeData"
          :key="data.mal_id"
          cols="12"
          sm="6"
          md="4"
        >
          <GalleryCard></GalleryCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import GalleryCard from "../components/shared/GalleryCard.vue";
import HeroSection from "../components/HeroSection.vue";
import { inject } from "vue";

const animeData = inject("data");
</script>
<style scoped>
.home-view {
  background: background;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.list-container {
  max-width: 920px;
}
</style>
