<template>
  <v-app>
    <v-main>
      <nav-bar />
      <router-view />
    </v-main>
    <v-btn
      class="ma-2"
      icon="mdi-theme-light-dark"
      location="top right"
      position="absolute"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>

<script lang="ts" setup>
import { fetchAllData } from "./composable/fetchAnimeData";
import { provide, ref } from "vue";
const Data = ref(fetchAllData());

provide("data", Data);
</script>
