import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('general', () => {
 
  const errorMessage = ref<string | null>(null)

  const setError = (err: string) =>{
    errorMessage.value = err;
  }
 
  

  


  return {
    setError,
    errorMessage
  }
})
