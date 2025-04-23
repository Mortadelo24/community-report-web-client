import {getCommunitiesJoined, getCommunitiesOwned} from '../modules/users'

class User{ 
    constructor(
        public displayName: string,
        public email: string,
        public id: number 
    ){}

    public getCommunitiesJoined(){
        return getCommunitiesJoined(this.id);
    }
    public getCommunitiesOwned(){
        return getCommunitiesOwned(this.id);
    }
}


export {
    User
}