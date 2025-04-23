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




export {
    parseCommunityList,
    parseUser,
    parseCommunity
}