import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {getLanguagePack} from '../languages/index.ts'
import type {LanguagePack, LanguageCode} from '../languages/index.ts'

export const useLanguageStore = defineStore("language", ()=>{
  const preference = ref("es");
  const languagePack = ref<LanguagePack | null>();
  
  const loadLanguagePack = async(languageCode: keyof LanguageCode) =>{
    preference.value = languageCode;
    languagePack.value = await getLanguagePack(languageCode); 
  }

  const getPhrase = (key: keyof LanguagePack) => {
    return computed(()=>{
      if (!languagePack.value) return "No text";
      return languagePack.value[key];
    })
  }


  return {
    preference,
    languagePack,
    loadLanguagePack, 
    getPhrase
  }
})


