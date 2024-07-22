type PriceDetail = {
  quantity: number,
  unit_price: number,
}

type ListingDetail = PriceDetail & {
  listings: number,
}

export type Price = {
  id: number,
  whitelisted: boolean,
  buys: PriceDetail,
  sells: PriceDetail,
}

export type Listing = {
  id: number,
  buys: ListingDetail[],
  sells: ListingDetail[],
}

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
