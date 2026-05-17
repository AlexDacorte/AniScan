<template>
  <v-app-bar title="ANISCAN">
    <v-form class="search-input">
      <v-text-field label="search" v-model="query"> </v-text-field>
    </v-form>
    <v-list title="links">
      <v-list-item v-for="navLink in navLinksText" :key="navLink.name" title="">
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
    to: "/about",
  },
  {
    name: "More",
    to: "/more",
  },
];
</script>
<style scoped>
.search-input {
  margin-left: auto;
  width: 300px;
}
</style>
