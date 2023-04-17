export interface PetData {
  id: number
  userId: number | string
  speciesId: number
  name: string
  xpCurrent: number
  hpCurrent: number
  hungerCurrent: number
  level: number
  }

export type NewPet = Omit<
  PetData,
  'id' | 'userId' | 'xpCurrent' | 'hpCurrent' | 'hungerCurrent' | 'level'
>


export interface AllPets {
  id: number
  userId: number | string
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

