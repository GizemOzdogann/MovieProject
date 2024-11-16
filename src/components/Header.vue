<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="header-section">
    <div class="header-logo" @click="goToHome"><img src="/logo.png" alt="Flix logo" /> MOVIES</div>
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

.header-logo img {
  width: 80px; /* You can adjust the size of the logo */
  height: auto;
  margin-right: 10px;
}

.header-nickname {
  font-size: 18px;
  color: #ecf0f1;
}
</style>
