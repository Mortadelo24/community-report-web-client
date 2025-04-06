import {defineStore} from 'pinia'
import {ref} from 'vue'
import defaultLenguagePack from '../lenguages/es.json'




export const useLenguageStore = defineStore("lenguage", ()=>{
  const preference = ref("es");
  const lenguagePack = ref(defaultLenguagePack);
  
  const loadLenguagePack = async(lenguageCode: string) =>{
    preference.value = lenguageCode;
    lenguagePack.value = await import(`../lenguages/${lenguageCode}.json`); 
  }

  return {
    preference,
    lenguagePack,
    loadLenguagePack
  }
})


