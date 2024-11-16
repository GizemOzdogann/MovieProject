<script setup>
import MovieCardItem from '@/components/MovieCardItem.vue'
import GridComponent from '@/components/GridComponent.vue'
import movies from '@/assets/movies.json'
</script>

<template>
  <GridComponent>
    <MovieCardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </GridComponent>
</template>
