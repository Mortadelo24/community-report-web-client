import { Community } from "./entities/community"
import { User } from "./entities/user"


const parseCommunity = (rawCommunity: any) => {
    return new Community(
        rawCommunity["id"],
        rawCommunity["name"]
    )
}

const parseCommunityList = (rawCommunities: any[]) => {
    return rawCommunities.map((rawCommunity: any) => {
        return parseCommunity(rawCommunity); 
    })
}

const parseUser = (rawUser: any) => {
    return new User(
        rawUser["display_name"],
        rawUser["email"],
        rawUser["id"]
    )
}

const parseUserList = (rawUserList: any[]) =>{
    return rawUserList.map((rawUser: any)=>{
        return parseUser(rawUser);
    })
}



export {
    parseCommunityList,
    parseCommunity,
    
    parseUserList,
    parseUser,
}