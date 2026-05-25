<template>
  <v-app-bar class="navbar ga-0 pl-8 pr-8">
    <v-app-bar-title>ANISCAN</v-app-bar-title>
    <v-list nav class="nav-links ma-0" title="links">
      <router-link
        v-for="navLink in navLinksText"
        :key="navLink.name"
        :to="navLink.to"
        class="nav-links"
        >{{ navLink.name }}</router-link
      >
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
<style scoped>
.navbar {
  background: background;
  box-shadow: none;
}

.nav-links {
  margin: 20px;
  text-decoration: none;
  color: white;
}

.nav-links:visited {
  color: white;
}
</style>
