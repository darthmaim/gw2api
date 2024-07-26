/**
 * Currency as returned from /v2/currencies
 * @see https://wiki.guildwars2.com/wiki/API:2/currencies
 */
export type Currency = {
  /** The currency id */
  id: number;

  /** The name of the currency */
  name: string;

  /** The description of the currency */
  description: string;

  /** The order as displayed in-game */
  order: number;

  /** The icon of the currency */
  icon: string;
}
