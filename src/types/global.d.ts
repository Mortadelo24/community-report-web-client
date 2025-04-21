interface User{
  id: string;
  displayName: string | None;
  photoURL: string | None;
}

interface Community {
  id: string;
  name: string;
}

interface CommunityCreate{
  name:string
}