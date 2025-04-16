import {defineStore} from 'pinia'
import {ref} from 'vue'
import {logIn as logInWithGoogle, logOut as logOutWithGoogle} from '../apis/firebase.ts'
import {getCurrentUser} from '../apis/backend.ts'
import {useGlobalStore} from '../stores/global.ts'

export const useAuthStore = defineStore('auth', ()=>{
  const isAuthenticated = ref(false);
  const displayName = ref<string|null>(null);
  const id = ref<string|null>(null);
  const photoURL = ref<string|null>(null);
  
  const logIn = async() =>{ 
    if( await logInWithGoogle() ){
      isAuthenticated.value = true;
    } 
  }
  const logOut = async() => {
    if(await logOutWithGoogle()){
      isAuthenticated.value = false;
      displayName.value = null;
      id.value = null;
    } 
  }
  const loadUser = async() => {
    const user = await getCurrentUser();

    displayName.value = user.displayName;
    id.value = user.id;
    photoURL.value = user.photoURL;
    const globalStore = useGlobalStore();
    globalStore.loadCommunities(id.value);
  }

  return {
    isAuthenticated,
    displayName,
    logIn,
    logOut,
    loadUser,
    id
  }
})
