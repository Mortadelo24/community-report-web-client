import { Community } from "./entities/community"
import { Report} from "./entities/report"
import { User } from "./entities/user"
import { Invitation } from "./entities/invitation"
import { Complaint } from "./entities/complaint"
import { StatisticReport } from "./entities/statistic"

// Todo create a generic function for lists

const parseCommunity = (rawCommunity: any) => {
    return new Community(
        rawCommunity["id"],
        rawCommunity["name"],
        rawCommunity["owner_id"]
    )
}


const parseUser = (rawUser: any) => {
    return new User(
        rawUser["display_name"],
        rawUser["email"],
        rawUser["id"]
    )
}

const parseReport = (rawReport: any) =>{ 
    return new Report(
        rawReport['id'],
        rawReport['complaint_id'],
        new Date(rawReport['created_at'])
    )
}

const parseStatisticReport = (rawReportDatachar: any)=>{
  return new StatisticReport(
    rawReportDatachar['id'],
    rawReportDatachar['text'],
    rawReportDatachar['count']
  )
}

const parseComplaint = (rawComplaint: any) =>{
  return new Complaint(
    rawComplaint['id'],
    rawComplaint['text']
  )
}

const parseInvitation = (rawInvitation: any) => {
    return new Invitation(
        rawInvitation['id']
    )
}

export {
    parseCommunity,
    parseUser,
    parseReport,
    parseStatisticReport,
    parseComplaint,
    parseInvitation
}
