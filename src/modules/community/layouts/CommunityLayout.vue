<script setup lang="ts">
import { useAuthStore } from '@/modules/user/stores';
import { storeToRefs } from 'pinia';
import LanguageSelect from '@/components/LanguageSelect.vue';
import { useRouter } from 'vue-router';


const authStore = useAuthStore()
const router = useRouter()
const { isAuthenticated } = storeToRefs(authStore);
const logOut = () => {
  authStore.logout()
  router.push({ name: 'login' })
}


</script>
<template>
  <nav class="flex p-2 gap-2 items-center ">
    <RouterLink exact-active-class="hidden" v-if="isAuthenticated" class="button-a" to="/">Home</RouterLink>
    <RouterLink v-if="!isAuthenticated" class="button-a" :to="{ name: 'login' }">Login</RouterLink>
    <button v-else @click="logOut" class="button-a">Log out</button>
    <LanguageSelect></LanguageSelect>
  </nav>
  <div class="p-4">
    <RouterView></RouterView> 
  </div>
</template>
