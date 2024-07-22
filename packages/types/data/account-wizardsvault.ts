import type { WizardsVaultListingType, WizardsVaultTrack } from './wizardsvault';

/**
 * Accounts wizards-vault listings.
 * Required scopes: account
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/wizardsvault/listings
 */
export interface AccountWizardsVaultListing {
  /** Listing id */
  id: number,

  /** Item id */
  item_id: number,

  /** Amount of items */
  item_count: number,

  /** Type of listing */
  type: WizardsVaultListingType,

  /** Cost in astral acclaim */
  cost: number,

  /** How many items were already purchased */
  purchased?: number,

  /** Purchase limit (`undefined` if unlimited) */
  purchase_limit?: number,
}

/**
 * Accounts wizards-vault objectives with meta reward.
 * Required scopes: account
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/wizardsvault/daily
 * @see https://wiki.guildwars2.com/wiki/API:2/account/wizardsvault/weekly
 */
export interface AccountWizardsVaultMetaObjectives {
  /** The current progress to the meta reward */
  meta_progress_current: number,

  /** The threshold for the meta progress to be 'complete' */
  meta_progress_complete: number,

  /** The ID of the item you receive for claiming the meta reward */
  meta_reward_item_id: number,

  /** The amount of Astral Acclaim you receive for claiming the meta reward */
  meta_reward_astral: number,

  /** Whether the account has claimed the meta reward */
  meta_reward_claimed: number,

  /** An array of objects detailing each weekly objective */
  objectives: AccountWizardsVaultObjective[]
}

/**
 * Accounts wizards-vault special objectives.
 * Required scopes: account
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/wizardsvault/special
 */
export interface AccountWizardsVaultSpecialObjectives {
  /** An array of objects detailing each weekly objective */
  objectives: AccountWizardsVaultObjective[]
}

export interface AccountWizardsVaultObjective {
  /** The ID of the objective */
  id: number,

  /** The title of the objective */
  title: string,

  /** The track this objective is part of */
  track: WizardsVaultTrack,

  /** How much astral acclaim this objective rewards */
  acclaim: number,

  /** The current progress towards this objective */
  progress_current: number,

  /** The progress needed to complete this objective */
  progress_complete: number,

  /** Whether the account has claimed this objective */
  claimed: boolean,
}
