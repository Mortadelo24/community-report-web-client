import {defineStore} from 'pinia'
import {ref} from 'vue'

interface LanguagePack {
  welcome: string, 
  communityListTitle: string
}

const getLanguagePack = async(languageCode: string): Promise<LanguagePack> =>{
  return (await import(`../languages/${languageCode}.json`));
}

export const useLanguageStore = defineStore("language", ()=>{
  const preference = ref("es");
  const languagePack = ref<LanguagePack>();
  
  const loadLanguagePack = async(languageCode: string) =>{
    preference.value = languageCode;
    languagePack.value = await getLanguagePack(languageCode);
  
    
  }

  return {
    preference,
    languagePack,
    loadLanguagePack
  }
})


