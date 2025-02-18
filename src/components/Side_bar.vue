<template>
  <div>
    <h2>Datos de Registro</h2>
    <p>Nombre: {{ nombre }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRegistroStore } from '@/stores/registro'

const registroStore = useRegistroStore()
const { nombre, email } = registroStore

watch(nombre, (newValue) => {
  console.log('Nombre actualizado:', newValue)
})

watch(email, (newValue) => {
  console.log('Email actualizado:', newValue)
})
</script>

<style scoped></style>
