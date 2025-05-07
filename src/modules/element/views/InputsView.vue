<script setup lang="ts">
import { ref } from 'vue';
import Input from '../components/Input.vue';

const testText = ref("Test")
</script>

<template>
  <div class="p-6 flex flex-col gap-6">
    <p class="text-big-a">Inputs</p>
    <p class="text-big-a">TestText: {{ testText }}</p>
    <div class="flex flex-row flex-wrap gap-2">
      <Input v-model="testText"></Input>
      <Input v-model="testText" icon="home"></Input> 
    </div>
  </div>

</template>
