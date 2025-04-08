import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {getLanguagePack, getLanguagePreference} from '../languages/index.ts'
import type { LanguagePack,  LanguageCode} from '../languages/index.ts'

export const useLanguageStore = defineStore("language", ()=>{
  const preference = ref< keyof LanguageCode>(getLanguagePreference());
  const languagePack = ref<LanguagePack | null>();

  
  const loadLanguagePack = async(languageCode?: keyof LanguageCode) =>{
   if (languageCode) preference.value = languageCode;
   languagePack.value = await getLanguagePack(preference.value); 
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


