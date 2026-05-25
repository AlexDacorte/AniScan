<template>
  <motion.div
    :initial="{ scale: 1 }"
    :whileHover="{ scale: 1.1 }"
    class="motion-card-container"
  >
    <motion.div class="card-image-container">
      <motion.img
        class="card-img"
        src="https://picsum.photos/seed/anime-1-image_url/300/450"
        alt="placeHolder"
        :initial="{ filter: 'none' }"
        :whileHover="{ filter: 'blur(1px)' }"
      >
      </motion.img>
      <motion.div class="rated-container">
        <v-divider vertical></v-divider>
        <p>PG E</p>
      </motion.div>
    </motion.div>
    <motion.div class="card-info-container">
      <v-chip
        :class="true ? 'green' : 'red'"
        class="rounded-lg"
        variant="outlined"
        >{{ true ? "airing" : "not airing" }}</v-chip
      >
      <p class="release-date">no release date</p>
      <h3 class="card-title">no title</h3>

      <v-chip-group>
        <v-chip class="rounded">hentai</v-chip>
      </v-chip-group>
    </motion.div>
  </motion.div>
</template>
<script setup lang="ts">
import { motion } from "motion-v";
// const props = defineProps({
//   // anime: {
//   //   type: Object as () => remoteAnimeType,
//   //   required: true,
//   // },
// });
</script>
<style scoped>
.motion-card-container {
  display: flex;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 0.5rem;
}

.card-image-container {
  flex: 1;
  display: flex;
  align-items: center;
}
.card-img {
  width: 100%;
  border-radius: 8px;
}
.rated-container {
  position: absolute;
  bottom: 0;
  left: 0;
}
.card-info-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
}

.card-title {
  margin: 0;
}

.img-rating {
  position: absolute;
  left: 12px;
  bottom: 12px;
}
.release-date {
  margin: 0;
  font-size: 0.75rem;
}
</style>
