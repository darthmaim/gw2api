/**
 * Accounts legendary armory.
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/legendaryarmory
 */
export interface Legendaryarmory {
  /** The item id */
  id: number,

  /** The maximum amount that can be stored in the armory */
  max_count: number,
}
