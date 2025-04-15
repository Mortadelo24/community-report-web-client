<script setup lang="ts">
  import {onBeforeMount} from 'vue'
  import {useLanguageStore} from './stores/language.ts'
  import {useAuthStore} from './stores/auth.ts'
  import {onLogOut, onLogIn} from './apis/firebase.ts'
  import LanguageSelect from './components/LanguageSelect.vue'
import { storeToRefs } from 'pinia'
  import {setAuthenticationToken} from './apis/backend.ts'

  const {loadLanguagePack} = useLanguageStore();
 
  const authStore = useAuthStore();
  const {loadUser} = authStore;
  const {isAuthenticated} = storeToRefs(authStore); 


  onLogIn(async(user)=>{ 
    setAuthenticationToken(await user.getIdToken()); 
    loadUser(); 
    isAuthenticated.value = true;
    
  })
  onLogOut(()=>{
    isAuthenticated.value = false;
  })

  onBeforeMount(()=>{
    loadLanguagePack();
  })

</script>
<template>
  <nav class="flex gap-2 text-black-200 p-4">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{name: 'auth'}">Auth</RouterLink>
    <LanguageSelect></LanguageSelect>
  </nav>
  <RouterView class="mx-2 my-4"></RouterView>
  
  

 
</template>

