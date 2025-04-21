import axios from 'axios'

type Provider = 'google';


const backEnd = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
})

const setAuthenticationToken = (authToken: string | null) => {
  console.log("Auth token: ", authToken)
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
  const response = await backEnd.post('/users/token',{
    access_token: token,
    token_type: 'Bearer',
    provider: provider  
  });

  return  response.data['access_token']
 }catch(_){
    throw new Error("Could not log in the user")
 } 
}

const getCommunities = async(userID: string) => {
  const response = await backEnd.get(`/users/${userID}/communities`);
  const data: any[] = response.data
  const communities = data as Community[]
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

const checkServerHealth = async()=>{
  try{
    await backEnd.get('/health');
  } catch(__){
    return false
  }
  return true
}

const createCommunity = async(newCommunity: CommunityCreate)=>{
  try{
    await backEnd.post('/communities', newCommunity);
  }catch(__){
    console.error("could not create the community");
  }
}

export default {
  getCommunities,
  loadAccessToken,
  setAccessToken,
  getCurrentUser,
  checkServerHealth,
  logIn,
  createCommunity
}
