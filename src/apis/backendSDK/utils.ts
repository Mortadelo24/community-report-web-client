import { Community } from "./entities/community"
import { Report } from "./entities/report"
import { User } from "./entities/user"

// Todo create a generic function for lists

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

const parseReport = (rawReport: any) =>{
    return new Report(
        rawReport['id'],
        rawReport['complaint']
    )
}

const parseReportList = (rawReportList: any[]) =>{
    return rawReportList.map((rawReport: any)=>{
        return parseReport(rawReport)
    })
}

export {
    parseCommunityList,
    parseCommunity,
    
    parseUserList,
    parseUser,

    parseReport,
    parseReportList
}