<script setup lang="ts">
import {useLanguageStore} from '../stores/language.ts'
import {storeToRefs} from 'pinia'


const languageStore = useLanguageStore();

const {preference} = storeToRefs(languageStore);
 
</script>

<template>
  <div>
  <p>Selected language: {{preference}}</p>  
  </div>
</template>
