import { backend } from "./config";

const getCurrentUser = async()=>{
  const response = await backend.get("/users/me"); 
  const data = response.data;
  
  return {
    id: data.id,
    displayName: data.display_name,
  } as User
}

const getUserCommunitiesJoined = async() => {
  const response = await backend.get(`/users/me/communities/joined`);
  const data: any[] = response.data
  const communities = data as Community[]
  return communities
}


export {
    getCurrentUser,
    getUserCommunitiesJoined
}