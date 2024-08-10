/**
 * Homestead decorations (/v2/homestead/decorations).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/homestead/decorations
 */
export interface HomesteadDecoration {
  /** The decoration id */
  id: number,

  /** The name of the decoration */
  name: string,

  /** The description of the decoration */
  description: string,

  /** The icon of the decoration */
  icon: string

  /** The maximum amount that can be stored */
  max_count: number,
}
