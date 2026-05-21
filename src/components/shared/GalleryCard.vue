<template>
  <v-card variant="outlined" class="d-flex pa-2 ga-0 anime-card" width="300px">
    <v-container class="pa-0" fluid>
      <v-row class="ga-0"
        ><v-col cols="16" class="mr-4">
          <v-img
            :src="anime.images.jpg.image_url"
            :alt="anime.title_english"
            class="rounded"
          >
          </v-img
        ></v-col>
        <v-col cols="6"
          ><v-chip
            :class="anime.data.airing ? 'green' : 'red'"
            class="rounded"
            variant="outlined"
            >{{ anime.data.airing ? "airing" : "not airing" }}</v-chip
          >
          <p>{{ anime.data.aired.from ?? "no release date" }}</p>
          <h3>{{ anime.data.title_english ?? "no title" }}</h3>
          <v-row>
            <v-col cols="6">rating</v-col>
            <v-col cols="6">data</v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-chip-group>
                <v-chip class="rounded">hentai</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import type { remoteAnimeType as remoteAnime } from "../../types";
onMounted(() => {
  console.log(props.anime);
});
const props = defineProps({
  anime: {
    type: Object as () => remoteAnime,
    required: true,
  },
});
</script>
<style scoped>
.anime-card {
  text-align: left;
}
</style>
