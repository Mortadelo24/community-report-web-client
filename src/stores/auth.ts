import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle} from '../apis/firebase.ts'
import backend from '../apis/backend.ts'

export const useAuthStore = defineStore('auth', ()=>{
  const isAuthenticated = ref(false);
  const currentUser = ref<User | null>(null); 
  
  const logIn = async() =>{
    await logOut();
    const googleResponse: any = await logInWithGoogle(); 
    if( !googleResponse ) return
    
    const firebase_token = googleResponse['user']['accessToken'];
    
    try{
      const accessToken = await backend.logIn('google', firebase_token);
      backend.setAccessToken(accessToken);
      isAuthenticated.value = true;
    } catch(__){
      console.error("There is a problem with the authentication")
    }
    
  } 
  const logOut = async() => {
    backend.setAccessToken(null) 
    isAuthenticated.value = false;
    currentUser.value = null;
  }
  const loadCurrentUser = async() => {
    currentUser.value = await backend.getCurrentUser();
  }
 
  const authenticateLocalUser =  async()=>{
    if (backend.loadAccessToken()){
      try{
        await backend.getCurrentUser();
        isAuthenticated.value = true;        
      }catch(__){
        console.error("The user was not found")
      }
      
      
    }
  } 
  const initialize = async()=>{
    await authenticateLocalUser();
  }
  return {
    initialize,
    currentUser,
    isAuthenticated,
    logIn,
    logOut,
    loadCurrentUser,
    authenticateLocalUser
  }
})
