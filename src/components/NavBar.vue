<template>
  <v-app-bar class="ga-0">
    <v-app-bar-title>ANISCAN</v-app-bar-title>
    <v-list class="ma-0" title="links">
      <v-list-item v-for="navLink in navLinksText" :key="navLink.name">
        <router-link :to="navLink.to">{{ navLink.name }}</router-link>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>
<script setup lang="ts">
const query = defineModel("", {
  type: String,
  default: "",
});

const navLinksText = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/",
  },
  {
    name: "More",
    to: "/",
  },
];
</script>
<style scoped></style>
