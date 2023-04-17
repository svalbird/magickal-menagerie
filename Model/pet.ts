export interface PetData {
  id: number
  auth0Id: string
  speciesId: number
  name: string
  xpCurrent: number
  hpCurrent: number
  hungerCurrent: number
  level: number
}

export interface NewPet {
  speciesId: number
  name: string
}

export interface AllPets {
  id: number
  auth0Id: string
  userDisplayName: string
  speciesId: number
  petName: string
  petImage: string
  speciesName: string
  xpCurrent: number
  hpCurrent: number
  hungerCurrent: number
  level: number
  hungerMax: number
  hpMax: number
}
