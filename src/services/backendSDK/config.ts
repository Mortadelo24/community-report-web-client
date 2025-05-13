import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_URL 

const backend = axios.create({
  baseURL,
  timeout: 1000,
})

const setAuthenticationToken = (authToken: string | null) => {
  console.log("Auth token: ", authToken)
  backend.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; 
}

const checkServerHealth = async()=>{
  try{
    await backend.get('/health');
    return true
  }catch(__){} 
  return false
}

export {
    backend,
    baseURL,
    setAuthenticationToken,
    checkServerHealth
}
