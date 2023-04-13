export interface AddUser {
  id: number
  auth0_id: number | string
  display_name: string
  money: number
}

export interface NewUser {
  displayName: string
}
