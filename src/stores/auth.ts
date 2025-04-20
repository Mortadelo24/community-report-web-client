import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle} from '../apis/firebase.ts'
import {getCurrentUser, loadAccessToken, setAccessToken , logIn as logInBackEnd} from '../apis/backend.ts'

export const useAuthStore = defineStore('auth', ()=>{
  const isAuthenticated = ref(false);
  const currentUser = ref<User | null>(null); 
  
  const logIn = async() =>{
    await logOut();
    const googleResponse: any = await logInWithGoogle(); 
    if( !googleResponse ) return
    
    const firebase_token = googleResponse['user']['accessToken'];
    
    try{
      const accessToken = await logInBackEnd('google', firebase_token);
      setAccessToken(accessToken);
      isAuthenticated.value = true;
    } catch(__){
      console.error("There is a problem with the authentication")
    }
    
  } 
  const logOut = async() => {
    setAccessToken(null) 
    isAuthenticated.value = false;
    currentUser.value = null;
  }
  const loadCurrentUser = async() => {
    currentUser.value = await getCurrentUser();
  }
  
  const initializeAuth = ()=>{
    if (loadAccessToken()){
      isAuthenticated.value = true;
    }
  } 
  return {
    initializeAuth,
    currentUser,
    isAuthenticated,
    logIn,
    logOut,
    loadCurrentUser
  }
})
