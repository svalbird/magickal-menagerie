export interface Inventory {
  id: number
  userId: number | string
  itemId: number
  name: string
  type: string
  description: string
  hungerFill: number
  hpFill: number
  image: string
}

export interface NewInventoryItem {
  userId: number | string
  itemId: number
}
