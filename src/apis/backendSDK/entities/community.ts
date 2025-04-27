import {getMembers, getReports} from '../modules/communities'

class Community{
    constructor(
        public id: string, 
        public name: string
    ){}

    public getMembers(){
        return getMembers(this.id)
    }
    public getReports(){
        return getReports(this.id)
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