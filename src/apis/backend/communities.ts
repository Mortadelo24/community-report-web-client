import {backend} from "./config";

const createCommunity = async(newCommunity: CommunityCreate)=>{
  try{
    const response =  await backend.post('/communities', newCommunity);
    return response.data as Community
  }catch(__){}
  
  return null
}
const getCommunity = async(community_id: number) => {
  try{
    const response = await backend.get(`/communities/${community_id}`)
    return response.data as Community
  }catch (__){}

  return null
}

export{
    createCommunity,
    getCommunity
}