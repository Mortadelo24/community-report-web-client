import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle, logOut as logOutWithGoogle} from '../apis/firebase.ts'
import type { User as FireBaseUser } from 'firebase/auth';

export const useAuthStore = defineStore('auth', ()=>{
  const isAuthenticated = ref(false);
  const displayName = ref("");

  const logIn = async() =>{
    try{
      await logInWithGoogle();
    }catch(error){
      
      return
    }
    
    isAuthenticated.value = true;

    
  }
  const logOut = async() => {
    try{
      await logOutWithGoogle();
    }catch(error){
      return
    }

    isAuthenticated.value = false;
  }
  const loadUserInfo = (user: FireBaseUser) => {
    displayName.value = user.displayName || "";
  }

  return {
    isAuthenticated,
    displayName,
    logIn,
    logOut,
    loadUserInfo
  }
})
