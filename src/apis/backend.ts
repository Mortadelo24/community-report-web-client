import axios from 'axios'

interface Community {
  id: string;
  name: string;
}
type Provider = 'google';


const backEnd = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
})

const setAuthenticationToken = (authToken: string | null) => {
  backEnd.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; 
}

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
  const response = await backEnd.post('/login', {
    "provider": provider,
    "token": token
  });

  return  response.data['accessToken']
 }catch(_){
    throw new Error("Could not log in the user")
 } 
}
const register = async(provider: Provider, token: string) =>{
  try{
    const response = await backEnd.post('/users', {
      "provider": provider,
      "token": token
    });

    return response.data['accessToken']
  }catch(__){
    throw new Error("Could not register the user");
  }
}

const getCommunities = async(userID: string) => {
  const response = await backEnd.get(`/users/${userID}/communities`);
  const data: any[] = response.data
  const communities = data.map((communityInfo)=>{
    return {
      id: communityInfo.id,
      name: communityInfo.name
    } as Community
  })
  return communities
}
const getCurrentUser = async()=>{
  const response = await backEnd.get("/users/me"); 
  const data = response.data;
  
  return {
    id: data.id,
    displayName: data.display_name,
  } as User
}

export type {
  Community,
}

export {
  getCommunities,
  loadAccessToken,
  setAccessToken,
  getCurrentUser,
  logIn,
  register
}
