/**
 * Accounts homestead decorations (/v2/account/homestead/decorations).
 * Required scopes: account, wallet
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/homestead/decorations
 */
export interface AccountHomesteadDecoration {
  /** The homestead decoration id */
  id: number,

  /** The amount of this decoration owned */
  count: number,
}
