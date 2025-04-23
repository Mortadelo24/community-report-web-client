import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle} from '../apis/firebase.ts'
import {backendSDK, User} from '@/apis/backendSDK/index.ts'


export const useAuthStore = defineStore('auth', ()=>{
  const isAuthenticated = ref(false);
  const currentUser = ref<User | null>(null); 
  
  const logIn = async() =>{
    await logOut();
    const googleResponse: any = await logInWithGoogle(); 
    if( !googleResponse ) return
    
    const firebaseToken = googleResponse['user']['accessToken'];
    
    try{
      await backendSDK.auth.authenticateUser('google', firebaseToken)
      isAuthenticated.value = true;
    } catch(__){
      console.error("There is a problem with the authentication")
    }
    
  } 
  const logOut = async() => {
    backendSDK.auth.logout();
    isAuthenticated.value = false;
    currentUser.value = null;
  }
  const loadCurrentUser = async() => {
    currentUser.value = await backendSDK.users.getCurrent();
  }
 
  const initialize = async()=>{
    isAuthenticated.value = backendSDK.auth.isAuthenticated();
  }
  return {
    initialize,
    currentUser,
    isAuthenticated,
    logIn,
    logOut,
    loadCurrentUser,
  }
})
