interface Community {
  id: number;
  name: string;
}

interface User {
  id: number;
  name:string;
}
const users: User[] = [
  {
    id: 1, name: "Pedro2"
  }, 
  {
    id: 2, name: "Calton2"
  }
]

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
const getUser = async(id: number) => {
  return users.find(user => user.id == id)
}
export type {
  Community,
  User
}

export {
  getCommunities,
  getUser

}
