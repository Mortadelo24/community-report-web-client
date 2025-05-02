import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const app = initializeApp({
  "apiKey": "AIzaSyB3PA7IzJDkaNcEfo3Fnu27fr-P10r1AT8",
  "authDomain": "integrador-communities.firebaseapp.com",
  "projectId": "integrador-communities",
  "storageBucket": "integrador-communities.firebasestorage.app",
  "messagingSenderId": "382672568496",
  "appId": "1:382672568496:web:62a91735c6c0d01f063b75"
});
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

