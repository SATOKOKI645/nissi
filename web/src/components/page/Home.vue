<script setup lang="ts">
import { ref } from 'vue'
import Layout from '../layout/Layout.vue'
import Input from '../ui/Input.vue'

const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<template>
  <Layout>
    <h1>HOME</h1>
    <h2>Text Input</h2>
    <input v-model="text" /> {{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <Input></Input>
  </Layout>
</template>

<style scoped></style>
