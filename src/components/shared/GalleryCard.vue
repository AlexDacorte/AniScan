<template>
  <v-card variant="outlined" class="d-flex pa-2 ga-0 anime-card" width="300px">
    <v-container class="pa-0" fluid>
      <v-row class="ga-0"
        ><v-col cols="16" class="mr-4">
          <v-img
            src="https://picsum.photos/seed/anime-1-image_url/300/450"
            alt="placeHolder"
            class="rounded"
          >
          </v-img
        ></v-col>
        <v-col cols="6"
          ><v-chip
            :class="true ? 'green' : 'red'"
            class="rounded"
            variant="outlined"
            >{{ true ? "airing" : "not airing" }}</v-chip
          >
          <p>"no release date"</p>
          <h3>"no title"</h3>
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
// const props = defineProps({
//   // anime: {
//   //   type: Object as () => remoteAnimeType,
//   //   required: true,
//   // },
// });
</script>
<style scoped>
.anime-card {
  text-align: left;
}
</style>
