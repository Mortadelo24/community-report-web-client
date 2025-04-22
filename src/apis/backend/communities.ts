import {backend} from "./config";

const createCommunity = async(newCommunity: CommunityCreate)=>{
  try{
    await backend.post('/communities', newCommunity);
  }catch(__){
    console.error("could not create the community");
  }
}


export{
    createCommunity
}