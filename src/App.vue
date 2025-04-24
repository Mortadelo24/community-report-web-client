<script setup lang="ts">
  import {onBeforeMount} from 'vue'
  import {useLanguageStore} from './stores/language.ts'
  import LanguageSelect from './components/LanguageSelect.vue' 
  import ServerDown from './components/ServerDown.vue';
  import ErrorModal from './components/ErrorModal.vue';

  const {loadLanguagePack} = useLanguageStore(); 
  

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
  
  <ServerDown></ServerDown> 
  <ErrorModal></ErrorModal>
 
</template>

