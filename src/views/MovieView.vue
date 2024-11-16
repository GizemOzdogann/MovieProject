<script setup>
import movies from '@/assets/movies.json'
import { useRoute } from 'vue-router'
import GridComponent from '@/components/GridComponent.vue'
import ActorCardItem from '@/components/ActorCardItem.vue'
import actors from '@/assets/actors.json'

const route = useRoute()
const movie = movies.find((movie) => movie.id == route.params.id)

const actorList = movie.actors.map((actorId) => {
  return actors.find((actor) => actor.id == actorId)
})
</script>

<template>
  <div class="movie-detail">
    <div class="movie-header">
      <img :src="movie.imageUrl" alt="movie poster" class="movie-poster" />
      <div class="movie-info">
        <h1>{{ movie.name }} ({{ movie.year }})</h1>
        <p><strong>Yönetmen:</strong> {{ movie.director }}</p>
        <p><strong>Puan:</strong> {{ movie.rate }}</p>
      </div>
    </div>
    <div class="movie-comments">
      <h2>Yorumlar</h2>
      <div v-for="(comment, index) in movie.comments" :key="index" class="comment">
        <p>
          <strong>{{ comment.title }}</strong> (<span>{{ comment.date }}</span
          >)
        </p>
        <p>{{ comment.content }}</p>
      </div>
    </div>
    <div class="movie-actors">
      <h2>Aktörler</h2>
      <GridComponent>
        <ActorCardItem v-for="(actor, index) in actorList" :key="index" :actor="actor" />
      </GridComponent>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  padding: 20px;
}

.movie-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.movie-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
}

.movie-info h1 {
  font-size: 28px;
  margin: 0;
}

.movie-info p {
  margin: 5px 0;
  font-size: 16px;
}

.movie-comments {
  margin-bottom: 30px;
}

.movie-comments h2 {
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

.movie-actors h2 {
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
