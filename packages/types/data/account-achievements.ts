/**
 * Accounts achievement progression.
 * Required scopes: account, progression
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/achievements
 */
export interface AccountAchievement {
  /** achievement id */
  id: number,

  /** achievement progress */
  current?: number,

  /** amount needed to complete the achievement */
  max?: number,

  /** achievement done */
  done: boolean,

  /** list of finished bits (see /v2/achievement) */
  bits?: number[],

  /** the number of times the achievement was repeated */
  repeated?: number,

  /** flag indicating if the achievement is unlocked */
  unlocked?: boolean,
}
