<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['movie'])
const movie = props.movie
const router = useRouter()

const goToMovieDetail = () => {
  router.push({ name: 'MovieDetail', params: { id: movie.id } })
}
</script>

<template>
  <div class="movie-card" @click="goToMovieDetail">
    <img :src="movie.imageUrl" :alt="movie.name" class="movie-image" />
    <div class="movie-details">
      <h3 class="movie-title">{{ movie.name }}</h3>
      <p class="movie-rate">{{ movie.rate }}</p>
      <p class="movie-comments-count">{{ movie.comments.length }} Yorum</p>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  max-width: 220px;
  transition: transform 0.3s ease;
  position: relative;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-image {
  width: 230px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-bottom: 2px solid #f1c40f;
}

.movie-details {
  padding: 10px;
  color: #fff;
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f1c40f;
}

.movie-rate {
  position: absolute;
  top: 0;
  left: 24px;
  border: 2px solid #f1c40f;
  color: #f1c40f;
  background-color: #1c1c1c;
  padding: 5px;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
}

.movie-year,
.movie-director,
.movie-comments-count {
  font-size: 14px;
  margin: 5px 0;
  text-align: center;
}
</style>
