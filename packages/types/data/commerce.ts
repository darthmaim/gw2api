export type TransactionCurrent = {
  id: number,
  item_id: number,
  price: number,
  quantity: number,
  created: string
}

export type TransactionHistoric = TransactionCurrent & {
  purchased: string
}
