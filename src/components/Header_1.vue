<template>
  <div class="header">
    <h1>La temperatura actual es de {{ temperatura }}°C</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const temperatura = ref(0)

const obtenerTemperatura = () => {
  temperatura.value = Math.floor(Math.random() * 30) + 1
}

onMounted(() => {
  obtenerTemperatura()
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
}
</style>
