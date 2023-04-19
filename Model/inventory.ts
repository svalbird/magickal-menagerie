export interface Inventory {
  id: number
  auth0Id: string
  itemId: number
  name: string
  type: string
  description: string
  hungerFill: number
  hpFill: number
  image: string
}

export interface NewInventoryItem {
  auth0Id: string
  itemId: number
}
