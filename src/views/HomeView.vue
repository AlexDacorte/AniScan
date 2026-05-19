<template>
  <div class="home-view">
    <v-container>
      <v-row>
        <v-col v-for="data in datas" :key="data.mal_id" cols="12" sm="6" md="4">
          <GalleryCard :anime="data"></GalleryCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import GalleryCard from "../components/shared/GalleryCard.vue";
import { inject } from "vue";

const datas = inject("data");
</script>
<style scoped>
.home-view {
  background: background;
}
</style>
