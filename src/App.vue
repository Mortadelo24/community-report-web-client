<script setup lang="ts">
  import {onBeforeMount} from 'vue'
  import {useLanguageStore} from './stores/language.ts'

  const {loadLanguagePack} = useLanguageStore();

  onBeforeMount(()=>{
    loadLanguagePack("en");
  })

</script>
<template>
  <nav class="flex gap-2 text-gray-200 p-4">
    <RouterLink to="/" class="bg-red-600">Home</RouterLink>
  </nav>
  <RouterView class="mx-2 my-4"></RouterView>
  
  

 
</template>

