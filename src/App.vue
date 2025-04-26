<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useLanguageStore } from './stores/language.ts'
import LanguageSelect from './components/LanguageSelect.vue'
import ServerDown from './components/ServerDown.vue';
import ErrorModal from './components/ErrorModal.vue';
import { useAuthStore } from './stores/auth.ts';
import { storeToRefs } from 'pinia';
import { router } from './router/index.ts';

const { loadLanguagePack } = useLanguageStore();
const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore);

onBeforeMount(() => {

  loadLanguagePack();
})
const logOut = () => {
  authStore.logOut()
  router.push({ name: 'auth' })
}

</script>
<template>
  <nav class="flex p-2 gap-2 items-center ">
    <RouterLink class="button-a" to="/">Home</RouterLink>
    <RouterLink v-if="!isAuthenticated" class="button-a" :to="{ name: 'auth' }">Login</RouterLink>
    <button v-else @click="logOut" class="button-a">Log out</button>
    <LanguageSelect></LanguageSelect>
  </nav>
  <RouterView class="mx-2 my-4 h-full"></RouterView>

  <ServerDown></ServerDown>
  <ErrorModal></ErrorModal>

</template>
