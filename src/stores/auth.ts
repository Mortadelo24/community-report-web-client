import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useAuthStore = defineStore('auth', ()=>{
  const name = ref("Juan perez");


  return {
    name
  }
})
