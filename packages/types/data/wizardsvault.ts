export type WizardsVaultListingType = 'Featured' | 'Normal' | 'Legacy';

export type WizardsVaultTrack = 'PvE' | 'PvP' | 'WvW';

/**
 * Info on the current Wizard's Vault season
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/wizardsvault
 */
export interface WizardsVault {
  /** The name of the current season */
  title: string,

  /** The date that the current season begins (ISO-8601) */
  start: string,

  /** The date that the current season ends (ISO-8601) */
  end: string,

  /** The wizard's vault listing ids available */
  listings: number[],

  /** The wizard's vault objective ids available */
  objectives: number[],
}

/**
 * Listings available in the Wizards Vault
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/wizardsvault/listings
 */
export interface WizardsVaultListing {
  /** The listing id */
  id: number;

  /** The id of the item */
  item_id: number;

  /** Amount of items */
  item_count: number;

  /** Type of the listing */
  type: WizardsVaultListingType;

  /** Cost in Astral Acclaim */
  cost: number;
}


/**
 * Objectives available in the Wizards Vault
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/wizardsvault/objectives
 */
export interface WizardsVaultObjective {
  /** The objective id */
  id: number;

  /** The title of the objective */
  title: number;

  /** The track the objective belongs to */
  track: WizardsVaultTrack;

  /** Amount of Astral Acclaim rewarded for this objective  */
  acclaim: number;
}
