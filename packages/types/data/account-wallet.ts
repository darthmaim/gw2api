/**
 * Accounts wallet.
 * Required scopes: account, wallet
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/wallet
 */
export interface AccountWallet {
  /** currency id */
  id: number,

  /** amount of this currency in the wallet */
  value: number,
}
