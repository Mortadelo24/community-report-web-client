<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import {router} from  '@/router'
import { storeToRefs } from 'pinia';
import LanguageSelect from '@/components/LanguageSelect.vue';

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore);
const logOut = () => {
  authStore.logOut()
  router.push({ name: 'auth' })
}


</script>
<template>
  <nav class="flex p-2 gap-2 items-center ">
    <RouterLink  v-if="isAuthenticated" class="button-a" to="/">Home</RouterLink>
    <RouterLink v-if="!isAuthenticated" class="button-a" :to="{ name: 'auth' }">Login</RouterLink>
    <button v-else @click="logOut" class="button-a">Log out</button>
    <LanguageSelect></LanguageSelect>
  </nav>
  <div class="p-4">
    <RouterView></RouterView> 
  </div>
</template>
