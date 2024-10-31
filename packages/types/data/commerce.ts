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
    /** The id of the item, resolvable against /v2/items */
    id: number,

    /** The amount of items */
    count: number
  }
}


/**
 * Listing as returned from /v2/commerce/exchange/{coins,gems}
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/exchange
 */
export interface Exchange {
  /** The amount of coins per single gem */
  coins_per_gem: number,

  /** The amount exchanged for the specified quantity */
  quantity: number,
}


/**
 * Listing as returned from /v2/commerce/listings
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/listings
 */
export interface Listing {
  /** The id of the item, resolvable against /v2/items */
  id: number,

  /** Current buy listings */
  buys: Listing.Detail[],

  /** Current sell listings */
  sells: Listing.Detail[],
}

export namespace Listing {
  export interface Detail extends Price.Detail {
    /** Amount of listings */
    listings: number,
  }
}


/**
 * Price as returned from /v2/commerce/prices
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/prices
 */
export interface Price {
  /** The id of the item, resolvable against /v2/items */
  id: number,

  /** Flag if the item is available for Free to Play accounts */
  whitelisted: boolean,

  /** Buy price details */
  buys: Price.Detail,

  /** Sell price details */
  sells: Price.Detail,
}

export namespace Price {
  export interface Detail {
    /** Amount of items listed at this price */
    quantity: number,

    /** Price per item */
    unit_price: number,
  }
}


/**
 * Transactions as returned from /v2/commerce/transactions/current
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/transactions
 */
export interface TransactionCurrent {
  /** Transaction id */
  id: number,

  /** The id of the item, resolvable against /v2/items */
  item_id: number,

  /** The price of the transaction */
  price: number,

  /** The amount of items in this transaction */
  quantity: number,

  /** The transaction creation date as ISO-8601 timestamp */
  created: string
}


/**
 * Transactions as returned from /v2/commerce/transactions/history
 * @see https://wiki.guildwars2.com/wiki/API:2/commerce/transactions
 */
export interface TransactionHistoric extends TransactionCurrent {
  /** The date of purchase as ISO-8601 timestamp */
  purchased: string
}
