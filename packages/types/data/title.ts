/**
 * Title as returned from `/v2/titles`
 * @see https://wiki.guildwars2.com/wiki/API:2/titles
 */
export interface Title {
  /** The id of the title */
  id: number;

  /** The name of the title */
  name: string;

  /**
   * The achievement id that grants this title
   * @deprecated Use `achievements` instead
   */
  achievement?: number;

  /** List of achievement ids granting this title */
  achievements?: number[];

  /** Achievement Points required to unlock this title. */
  ap_required?: number;
}
