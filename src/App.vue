<script setup lang="ts">
  import {onBeforeMount} from 'vue'
  import {useLanguageStore} from './stores/language.ts'

  import LanguageSelect from './components/LanguageSelect.vue'

  const {loadLanguagePack} = useLanguageStore();

  onBeforeMount(()=>{
    loadLanguagePack();
  })

</script>
<template>
  <nav class="flex gap-2 text-black-200 p-4">
    <RouterLink to="/" class="bg-red-600">Home</RouterLink>
    <LanguageSelect></LanguageSelect>
  </nav>
  <RouterView class="mx-2 my-4"></RouterView>
  
  

 
</template>

