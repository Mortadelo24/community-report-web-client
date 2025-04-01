import {defineStore} from 'pinia'
import {ref} from 'vue'
import es from '../lenguages/es.json'

export const useLenguageStore = defineStore("lenguage", ()=>{
  const preference = ref("es");
  const lenguagePack = ref(es);

  return {
    preference,
    lenguagePack 
  }
})
