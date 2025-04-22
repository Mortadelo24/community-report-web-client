import axios from 'axios'

export type Provider = 'google';

const backend = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
})

const setAuthenticationToken = (authToken: string | null) => {
  console.log("Auth token: ", authToken)
  backend.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; 
}


const checkServerHealth = async()=>{
  try{
    await backend.get('/health');
  } catch(__){
    return false
  }
  return true
}

export {
    backend,
    setAuthenticationToken,
    checkServerHealth
}