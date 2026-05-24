/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import router from "@/router";
import App from "./App.vue";
import NavBar from "./components/shared/NavBar.vue";
import HomeView from "@/views/HomeView.vue";
import "unfonts.css";

const app = createApp(App);

registerPlugins(app);
app.use(router);
app.component("home-view", HomeView);
app.component("nav-bar", NavBar);
app.mount("#app");
