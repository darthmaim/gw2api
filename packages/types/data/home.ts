/**
 * Cats (/v2/home/cats).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/home/cats
 */
export interface HomeCat {
  /** The cat id */
  id: number,

  /** The hint on how to obtain the cat */
  hint: string,
}

/**
 * Home instance nodes (/v2/home/nodes).
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/home/nodes
 */
export interface HomeNode {
  /** The cat id */
  id: string,
}
