/**
 * AchievementGroup as returned from `/v2/achievements/groups`
 * @see https://wiki.guildwars2.com/wiki/API:2/achievements/groups
 */
export interface AchievementGroup {
  /** The id of the achievement group */
  id: string;

  /** The name of the achievement group */
  name: string;

  /** The description of the achievement group */
  description: string;

  /** The order in-game (ascending) */
  order: number;

  /** Achievement category ids that are part of this group */
  categories: number[];
};
