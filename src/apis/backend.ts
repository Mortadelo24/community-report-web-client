import axios from 'axios'

interface Community {
  id: string;
  name: string;
}

const backEnd = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
})

const setAuthenticationToken = (authToken: string | null) => {
  backEnd.defaults.headers.common['Authorization'] = authToken; 
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
    photoURL: data.photo_url
  } as User
}

export type {
  Community,
}

export {
  getCommunities,
  setAuthenticationToken,
  getCurrentUser
}
