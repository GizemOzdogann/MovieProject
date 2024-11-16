<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['actor'])
const router = useRouter()

const goToActorDetail = () => {
  router.push({ name: 'ActorDetail', params: { id: props.actor.id } })
}
</script>

<template>
  <div class="actor-card" @click="goToActorDetail">
    <img :src="actor.imageUrl" :alt="actor.name" class="actor-image" />
    <div class="actor-details">
      <h3 class="actor-title">{{ actor.name }}</h3>
    </div>
  </div>
</template>

<style scoped>
.actor-card {
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  max-width: 220px;
  transition: transform 0.3s ease;
  position: relative;
}

.actor-card:hover {
  transform: scale(1.05);
}

.actor-image {
  width: 230px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-bottom: 2px solid #f1c40f;
}

.actor-details {
  padding: 10px;
  color: #fff;
}

.actor-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f1c40f;
}
</style>
