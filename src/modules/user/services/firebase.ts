import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import firebaseConfig from "@/../firebaseConfig.json"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = async() => { 
  const provider = new GoogleAuthProvider();

  try{
    return await signInWithPopup(auth, provider);
  }catch(error){
    console.error("Error during authentication: ", error);
  } 
  
  return null
}

export{
 login,
} 

