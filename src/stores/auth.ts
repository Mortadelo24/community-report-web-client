import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle} from '../apis/firebase.ts'
import {getCurrentUser, loadAccessToken, setAccessToken , logIn as logInBackEnd, register as registerInBackEnd} from '../apis/backend.ts'

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
      console.log("The use will be registered")
      await register(firebase_token);
    }
    
  }

  const register = async(firebase_token: string)=>{
    try{
      const accessToken = await registerInBackEnd('google', firebase_token);
      setAccessToken(accessToken);
      isAuthenticated.value = true;
    } catch(__){
      console.error("could no create the user")
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
