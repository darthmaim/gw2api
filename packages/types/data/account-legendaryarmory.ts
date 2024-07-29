/**
 * Accounts legendary armory.
 * Required scopes: account, unlocks, inventories
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/legendaryarmory
 */
export interface AccountLegendaryarmory {
  /** The item id */
  id: number,

  /** The amount of this item available */
  count: number,
}
