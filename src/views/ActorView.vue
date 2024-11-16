<script setup>
import { useRoute } from 'vue-router'
import GridComponent from '@/components/GridComponent.vue'
import MovieCardItem from '@/components/MovieCardItem.vue'
import actors from '@/assets/actors.json'
import movies from '@/assets/movies.json'

const route = useRoute()
const actor = actors.find((actor) => actor.id == route.params.id)
const movieList = actor.filmIds.map((filmId) => {
  return movies.find((movie) => movie.id == filmId)
})
</script>

<template>
  <div class="actor-detail">
    <div class="actor-header">
      <img :src="actor.imageUrl" alt="actor poster" class="actor-poster" />
      <div class="actor-info">
        <h1>{{ actor.name }}</h1>
        <p>{{ actor.aboutActorContent }}</p>
      </div>
    </div>
    <div class="actor-actors">
      <h2>Filmler</h2>
      <GridComponent>
        <MovieCardItem v-for="(movie, index) in movieList" :key="index" :movie="movie" />
      </GridComponent>
    </div>
  </div>
</template>

<style scoped>
.actor-detail {
  padding: 20px;
}

.actor-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.actor-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
}

.actor-info h1 {
  font-size: 28px;
  margin: 0;
}

.actor-info p {
  margin: 5px 0;
  font-size: 16px;
}

.actor-comments {
  margin-bottom: 30px;
}

.actor-comments h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.comment {
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.comment p {
  margin: 5px 0;
}

.actor-actors h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.actor {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.actor-image {
  width: 50px;
  height: 75px;
  object-fit: cover;
  margin-right: 15px;
}

.actor p {
  margin: 0;
}
</style>
