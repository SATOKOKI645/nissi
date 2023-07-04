<script lang="ts">
import { defineProps } from 'vue'

export default {
  props: ['props'],
  setup() {
    defineProps(['props'])
  }
}
</script>

<!-- v-bindでinputの属性を受け取る -->
<template>
  <input type="text" class="input" v-bind="props" />
</template>

<style scoped>
.input {
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: var(--text-lg);
  line-height: 26px;
  text-align: center;
  background: var(--background);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-inset-sm);
}

.input:focus,
.input:active:focus,
.input.active:focus,
.input.focus,
.input:active.focus,
.input.active.focus {
  outline: 4px solid #0066ff46;
  outline-offset: 2px;
}
</style>
