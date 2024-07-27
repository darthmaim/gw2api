/**
 * GuildUpgrade as returned by `/v2/guild/upgrades`
 * @see
 */
export interface GuildUpgrade {
  /** The guild upgrade id */
  id: number;

  /** The name of the guild upgrade */
  name: string;

  /** The description of the guild upgrade */
  description: string;

  /** The icon of the guild upgrade */
  icon: string;

  /** The type of guild upgrade */
  type: 'Unlock' | 'Consumable' | 'BankBag' | 'AccumulatingCurrency' | 'Decoration' | 'Boost' | 'Claimable' | 'Hub' | 'GuildHall' | 'Queue' | 'GuildHallExpedition';

  /** Guild experience awarded upon building the upgrade */
  experience: number;

  /** Required guild upgrade ids */
  prerequisites: number[];

  /** Required guild level */
  required_level: number;

  // TODO: what unit is this?
  /** The time it takes to build this upgrade */
  build_time: number;

  /** Maximum item slots of the guild bank (Only for `BankBag`) */
  bag_max_items?: number;

  /** Maximum coins of the guild bank (Only for `BankBag`)*/
  bag_max_coins?: number;

  /** The cost of building this upgrade */
  costs: {
    /** The type of cost */
    type: 'Collectible' | 'Item' | 'Currency' | 'Coins';

    /** Item id (if type = `Item`) */
    item_id?: number;

    /** The name of this cost */
    name?: string;

    /** The count of this cost */
    count: number;
  }[];

}
