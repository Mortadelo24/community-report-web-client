import {getMembers, getReports, getInvitations} from '../modules/communities'
import { getStatisticCommunityReports } from '../modules/statistics'


class Community{
    constructor(
        public id: string, 
        public name: string,
        public ownerId: string
    ){}

    public getMembers(){
        return getMembers(this.id)
    }
    public getReports(){
        return getReports(this.id)
    }
    public getInvitations(){
        return getInvitations(this.id)
    }
    public getStatisticReports(){
      return getStatisticCommunityReports(this.id)
    }
}

interface CommunityCreate{
  name:string
}


export {
    Community
}

export type {
    CommunityCreate
}
