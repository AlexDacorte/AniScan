<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { fetchMockData } from "./composable/fetchAnimeData";
import { provide, ref } from "vue";
const Data = ref(fetchMockData());

provide("data", Data);
</script>
