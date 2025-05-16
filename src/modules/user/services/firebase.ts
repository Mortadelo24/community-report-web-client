import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const googleServiceCredentials = JSON.parse(import.meta.env.VITE_GOOGLE_SERVICE_CREDENTIALS) 

const app = initializeApp(googleServiceCredentials);
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

