<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useLanguageStore } from './stores/language.ts'
import ServerDown from './components/ServerDown.vue';
import ErrorModal from './components/modalAlerts/ErrorModal.vue'

const { loadLanguagePack } = useLanguageStore();

onBeforeMount(() => {

  loadLanguagePack();
})

</script>
<template>
  
  <RouterView></RouterView>

  <ServerDown></ServerDown>
  <ErrorModal></ErrorModal>

</template>
