export interface User {
    isLoggedIn: boolean
    id: number
    points: number;
    experience: number;
}

export interface UserCookie {
  id: number
}

export interface UserData {
  id: number;
  points: number;
  experience: number;
}