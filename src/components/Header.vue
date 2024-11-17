<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="header-section">
    <div class="header-logo" @click="goToHome">
      <img src="/movie-icon.png" alt="Flix logo" />
      <span class="movie-world">MovieWorld</span>
    </div>
    <div class="header-nickname">Gizem Oz</div>
  </div>
</template>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px;
  margin-bottom: 12px;
}

.header-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.movie-world {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: medium;
  color: #dfe8ed;
  margin-left: 1 px;
  text-transform: uppercase;
}

.header-logo img {
  width: 70px; /* You can adjust the size of the logo */
  height: auto;
  margin-right: 1px;
}

.header-nickname {
  font-size: 18px;
  color: #787f81;
}
</style>
