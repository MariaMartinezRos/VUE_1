<template>
  <div>
    <h2>Lista de tareas</h2>
    <input
      type="text"
      v-model="nuevaTarea"
      @keyup.enter="agregarTarea"
      placeholder="Escribe una nueva tarea"
    />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="tarea.id">
        {{ tarea.nombre }}
        <button @click="borrarTarea(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tareas = ref([
  { id: 1, nombre: 'Tarea 1' },
  { id: 2, nombre: 'Tarea 2' },
  { id: 3, nombre: 'Tarea 3' },
])
const nuevaTarea = ref('')

const agregarTarea = () => {
  if (nuevaTarea.value.trim() !== '') {
    tareas.value.push({ id: Date.now(), nombre: nuevaTarea.value })
    nuevaTarea.value = ''
  }
}

const borrarTarea = (index) => {
  tareas.value.splice(index, 1)
}
</script>

<style scoped></style>
