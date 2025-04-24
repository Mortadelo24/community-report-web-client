import {getMembers} from '../modules/communities'

class Community{
    constructor(
        public id: number, 
        public name: string
    ){}

    public getMembers(){
        return getMembers(this.id)
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