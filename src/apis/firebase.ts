import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, type User, signOut } from "firebase/auth";


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

const logIn = async() => { 
  const provider = new GoogleAuthProvider();
  try{
    await signInWithPopup(auth, provider);
  }catch(error){
    console.error("Error during aythentication: ", error);
    throw new Error("Error: unable to log in");
  } 
  
}
const logOut = async()=>{
  try{
    await signOut(auth);
  } catch(error){
    console.error("Error during loggin out: ", error);
    throw new Error("Error: unable to log out");
  }
} 

const isUserAuthenticated = () => {
  return !!auth.currentUser
}

const onLogIn = (callBack: (user: User)=>void)=>{
  onAuthStateChanged(auth, (user)=>{
    if (user){
     callBack(user);
    }
  })
}

const onLogOut = (callBack: ()=>void) =>{
  onAuthStateChanged(auth, (user)=>{
    if(!user){
      callBack();
    }
  })
}

let isAuthInitialized = false;
const waitForAuthToInitialize = (): Promise<void> =>{
  return new Promise((resolve)=>{
    if (isAuthInitialized) {
      resolve();
      return 
    }
    const unsubscribe =  onAuthStateChanged(auth, (__)=>{
      isAuthInitialized = true;
      unsubscribe();
      resolve();
    })
  })
} 


export{
 logIn,
 logOut,
 onLogIn,
 onLogOut,
  isUserAuthenticated,
 waitForAuthToInitialize,
} 

