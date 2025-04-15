import axios from 'axios'

interface Community {
  id: number;
  name: string;
}

const backEnd = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
})

const communities: Community[] = [
  {id: 1, name: "juan perez"},
  {id: 2, name: 'peru is not real'},
  {
    id:3, name: 'prueba 2'
  }
]

const setAuthenticationToken = (authToken: string | null) => {
  backEnd.defaults.headers.common['Authorization'] = authToken; 
}
const getCommunities = async() => {
  return communities
}
const getCurrentUser = async()=>{
  const response = await backEnd.get("/users/me"); 
  const data = response.data;
  
  return {
    id: data.id,
    displayName: data.display_name
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
