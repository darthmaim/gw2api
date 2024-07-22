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
