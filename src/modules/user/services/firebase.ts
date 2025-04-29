import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPgImbmjeM7LFBcICZMVPjKAUAfz6g_0I",
  authDomain: "integrador-one-adce2.firebaseapp.com",
  projectId: "integrador-one-adce2",
  storageBucket: "integrador-one-adce2.firebasestorage.app",
  messagingSenderId: "605319633402",
  appId: "1:605319633402:web:2647bbf9624905a8b1ac43",
  measurementId: "G-QT77P3KHGW"
};

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

