interface Community {
  id: number;
  name: string;
}

interface User {
  id: number;
  name:string;
}


const communities: Community[] = [
  {id: 1, name: "juan perez"},
  {id: 2, name: 'peru is not real'},
  {
    id:3, name: 'prueba 2'
  }
]


const getCommunities = async() => {
  return communities
}

export type {
  Community,
  User
}

export {
  getCommunities,

}
