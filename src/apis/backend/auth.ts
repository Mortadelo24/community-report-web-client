import {backend, setAuthenticationToken, type Provider} from "./config";


const setAccessToken = (token: string | null) => {
  if (token){
    localStorage.setItem('elkit', token);
    setAuthenticationToken(token);
  } else {
    localStorage.removeItem('elkit');
    setAuthenticationToken(null);
  }
} 
const loadAccessToken = () => {
  const token = localStorage.getItem('elkit');
  if (!token) return false
  setAuthenticationToken(token)
  return true
}

const logIn = async(provider: Provider, token: string) =>{
 try{
  const response = await backend.post('/users/token',{
    access_token: token,
    token_type: 'Bearer',
    provider: provider  
  });

  return  response.data['access_token']
 }catch(_){
    throw new Error("Could not log in the user")
 } 
}

export{
    setAccessToken,
    loadAccessToken,
    logIn
}

