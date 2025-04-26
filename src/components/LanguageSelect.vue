<script setup lang="ts">
import {useLanguageStore} from '../stores/language.ts'
import {storeToRefs} from 'pinia'
import {supportedLanguages} from '../languages/index.ts'
import type {LanguageCode} from '../languages/index.ts'
import {ref, watch} from 'vue'


const languageStore = useLanguageStore();

const {loadLanguagePack} = languageStore;
const {preference} = storeToRefs(languageStore);
const selectedLanguage = ref<keyof LanguageCode>(preference.value);

watch(selectedLanguage, ()=> {
  loadLanguagePack(selectedLanguage.value); 
})
</script>

<template>
  <div>
    <select v-model="selectedLanguage" class="select-a">
      <option v-for="language in supportedLanguages" :value="language">{{language}}</option>
    </select> 
 </div> 
</template>
