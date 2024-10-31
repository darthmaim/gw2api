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


/**
 * Delivery as returned from /v2/commerce/delivery
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/delivery
 */
export interface Delivery {
  /** The amount of coins ready for pickup */
  coins: number,

  /** Items waiting for pickup */
  items: Delivery.Item[]
}

export namespace Delivery {
  export interface Item {
    /** The id of the id, resolvable against /v2/items */
    id: number,
    /** The amount of items */
    count: number
  }
}
