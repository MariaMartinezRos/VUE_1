import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegistroStore = defineStore('registro', () => {
  const nombre = ref('')
  const email = ref('')

  const guardarRegistro = (nuevoNombre, nuevoEmail) => {
    nombre.value = nuevoNombre
    email.value = nuevoEmail
  }

  return { nombre, email, guardarRegistro }
})
