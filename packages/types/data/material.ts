/**
 * Material category as returned from /v2/materials
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/materials
 */
export interface MaterialCategory {
  /** Material category id */
  id: number;

  /** Name of the category */
  name: string;

  /** Item ids in this category */
  items: number[];

  /** The order in which the category appears in the material storage */
  order: number;
}

export interface MaterialStack {
  /** Material id */
  id: number;

  /** Material category id */
  category: number;

  /** Binding status */
  binding?: 'Account'

  /** Amount of items in the stack */
  count: number;
}
