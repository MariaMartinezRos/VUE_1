<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form @submit="submitForm" :validation-schema="schema">
      <div>
        <label for="nombre">Nombre:</label>
        <Field name="nombre" as="input" type="text" />
        <ErrorMessage name="nombre" />
      </div>
      <div>
        <label for="email">Correo:</label>
        <Field name="email" as="input" type="email" />
        <ErrorMessage name="email" />
      </div>
      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../validation-schema'

const submitForm = (values) => {
  console.log('Formulario enviado:', values)
}
</script>

<style scoped></style>
