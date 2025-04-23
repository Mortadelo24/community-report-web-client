

class Community{
    constructor(
        public id: number, 
        public name: string
    ){}
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