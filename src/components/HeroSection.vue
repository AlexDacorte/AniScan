<template>
  <div class="hero-section">
    <div class="hero-info">
      <h3 class="title-text">ANISCAN</h3>
      <p class="paragraph-text">
        <em class="paragraph-text bold">Aniscan</em> <em>is</em> the largest
        collection of anime data there is
      </p>
      <v-responsive class="overflox-x-auto">
        <v-chip-group class="chip-group-container d-flex" column>
          <v-chip
            variant="plain"
            class="hero-chip"
            label
            v-for="tag in ANIME_CAROUSEL_TAGS"
            :key="tag.id"
          >
            {{ tag.label }}
          </v-chip>
        </v-chip-group>
      </v-responsive>

      <div class="hero-button-container">
        <v-btn class="hero-button" color="primary" type="submit">
          Explore
        </v-btn>
        <v-btn class="hero-button" variant="outlined" type="submit">
          Show More
        </v-btn>
      </div>
    </div>
    <v-card variant="plain" class="anime-card" width="300px">
      <motion.img
        src="https://cdn.myanimelist.net/images/anime/1015/138006l.jpg"
        alt="placeholder"
        :initial="{ scale: 1 }"
        :whileHover="{ scale: 1.1, rotate: -5 }"
        class="hero-image"
    /></v-card>
  </div>
</template>
<script setup lang="ts">
import { motion } from "motion-v";

const ANIME_CAROUSEL_TAGS = [
  {
    id: "top-all",
    label: "🔥 Más Populares",
    type: "filter",
    value: "bypopularity",
  },
  { id: "top-airing", label: "📺 En Emisión", type: "filter", value: "airing" },
  {
    id: "top-upcoming",
    label: "⏳ Próximos Estrenos",
    type: "filter",
    value: "upcoming",
  },
  {
    id: "top-favorite",
    label: "💖 Favoritos de la Comunidad",
    type: "filter",
    value: "favorite",
  },
  { id: "type-tv", label: "🎬 Series TV", type: "type", value: "tv" },
  { id: "type-movie", label: "🍿 Películas", type: "type", value: "movie" },
  { id: "genre-action", label: "⚔️ Acción", type: "genre", value: 1 },
  { id: "genre-adventure", label: "🧭 Aventura", type: "genre", value: 2 },
  { id: "genre-comedy", label: "😂 Comedia", type: "genre", value: 4 },
  { id: "genre-fantasy", label: "🔮 Fantasía", type: "genre", value: 10 },
  { id: "genre-romance", label: "💞 Romance", type: "genre", value: 22 },
  { id: "genre-scifi", label: "🚀 Ciencia Ficción", type: "genre", value: 24 },
];
</script>
<style scoped>
@media (min-width: 600px) {
  .hero-section {
    display: flex;
    background: background;
    padding: 20px;
  }

  .chip-group-container {
    flex: 1;
  }
  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 50vw;
  }
  .hero-info > h3 {
    margin-bottom: 60px;
  }

  .hero-info > * {
    margin: 0;
    padding: 0;
  }
  .hero-button-container {
    margin-top: 1rem;
    display: flex;
    gap: 10px;
  }
  .anime-card {
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 3rem;
  }
  .hero-image {
    border-radius: 20px;
    z-index: 3;
  }
  .hero-button {
    width: 100px;
  }

  .hero-chip {
    border: 1px solid #dbe6ff;
  }
}

@media (max-width: 600px) {
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: background;
    flex-wrap: wrap;
    gap: 20px;
  }
  .anime-card {
    display: none;
  }
}
</style>
