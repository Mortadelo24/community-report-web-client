<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useLanguageStore } from './stores'
import { useUserStore } from './modules/user/stores';
import ServerDown from './components/ServerDown.vue';
import ErrorModal from './components/modalAlerts/ErrorModal.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

onBeforeMount(async() => {
  await useUserStore().loadUser();  
  useLanguageStore().loadLanguagePack();
})

</script>
<template>
  
  <RouterView></RouterView>

  <ServerDown v-if="route.name != 'serverOffline'"></ServerDown>
  <ErrorModal></ErrorModal>

</template>
