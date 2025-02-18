<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form @submit="submitForm" :validation-schema="schema">
      <div>
        <label for="nombre">Nombre:</label>
        <Field name="nombre" as="input" type="text" v-model="nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div>
        <label for="email">Correo:</label>
        <Field name="email" as="input" type="email" v-model="email" />
        <ErrorMessage name="email" />
      </div>
      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../validation-schema'
import { useRegistroStore } from '@/stores/registro'

const registroStore = useRegistroStore()
const { nombre, email, guardarRegistro } = registroStore

const submitForm = (values) => {
  guardarRegistro(values.nombre, values.email)
  console.log('Formulario enviado:', values)
}
</script>

<style scoped></style>
