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
    <RouterLink :to="{name: 'home'}">
      <Button :disabled="$route.name == 'home'" color="blue">
       Home 
      </Button>
    </RouterLink>
    <RouterLink v-if="!isAuthenticated"  :to="{ name: 'login' }">
      <Button color="blue">
        Login
      </Button>
    </RouterLink>
    <Button v-else @click="logOut" type="button" class=" gap-2 flex justify-center items-center">
      <p class="hidden md:block">Lo out</p>
      <span class="material-symbols-outlined">
        logout
      </span>
    </Button>
    <LanguageSelect></LanguageSelect>
  </nav>
  <div class="p-4"> 
    <RouterView></RouterView>
  </div>
</template>
