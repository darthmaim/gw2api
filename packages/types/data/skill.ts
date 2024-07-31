import type { Profession } from "./character";

/**
 * Skill as returned by `/v2/skills`
 * @see https://wiki.guildwars2.com/wiki/API:2/skills
 */
export interface Skill {
  /** The id of the skill */
  id: number;

  /** The name of the skill */
  name: string;

  /** The description of the skill */
  description: string;

  /** The icon of the skill */
  icon?: string;

  /** The id of the skill encoded as chatlink */
  chat_link: string;

  /** The type of skill */
  type?: 'Profession' | 'Weapon' | 'Utility' | 'Heal' | 'Elite' | 'Bundle' | 'Toolbelt' | 'Monster' | 'Transform' | 'Pet';

  /** The weapon type that uses this skill */
  weapon_type?: 'None' | 'Dagger' | 'Focus' | 'Staff' | 'Scepter' | 'Sword' | 'Trident' | 'Pistol' | 'Rifle' | 'Shield' | 'Speargun' | 'Greatsword' | 'Mace' | 'Torch' | 'Hammer' | 'Spear' | 'Axe' | 'Warhorn' | 'Shortbow' | 'Longbow';

  /** Professions that can use this skill */
  professions?: Profession[];

  /** The slot this skill is in */
  slot?: SkillSlot;

  /** Attunement of elementalist skills */
  attunement?: 'Water' | 'Air' | 'Fire' | 'Earth';

  /** Which secondary attunement is required for this skill to be available (Weaver) */
  dual_attunement?: 'Earth' | 'Water' | 'Air';

  /** Category of the skill (e.g. Signet, Cantrip, ...) */
  categories?: string[];

  /** Which offhand weapon is required for this skill to be available (Thief) */
  dual_wield?: 'Dagger' | 'Pistol' | 'None' | 'Nothing';

  /** Energy cost of the skill (Revenant, Warrior, Druid) */
  cost?: number;

  /** Initiative cost of the skill (Thief) */
  initiative?: number;

  /** Skill restrictions */
  flags: ('GroundTargeted' | 'NoUnderwater')[];

  /** Required specialization id */
  specialization?: number;

  /** Which skill id this skill flips over to when used */
  flip_skill?: number;

  /** If this skill is part of a chain, the next skill id in the chain */
  next_chain?: number;

  /** If this skill is part of a chain, the previous skill id in the chain */
  prev_chain?: number;

  /** Using this skill will replace the players skills with these skill ids */
  bundle_skills?: number[];

  /** Associated toolbelt skill (for Engineer utilities) */
  toolbelt_skill?: number;

  /** Using this skill will transform the player, replacing the players skills with these skill ids */
  transform_skills?: number[];

  /** Subskills */
  subskills?: {
    attunement: 'Fire' | 'Earth' | 'Air' | 'Water';
    form?: 'CelestialAvatar';
    id: number;
  }[];

  /** Skill facts */
  facts?: SkillFact[];

  /** Skill facts depending on traits */
  traited_facts?: SkillFactTraited[];
}

type OneToFour = '1' | '2' | '3' | '4';
type OneToFive = OneToFour | '5';

/** The slot a skill can appear in */
export type SkillSlot =
  | `Weapon_${OneToFive}`
  | 'Heal'
  | 'Utility'
  | 'Elite'
  | `Profession_${OneToFive}`
  | 'Pet'
  | 'Toolbelt'
  | `Downed_${OneToFour}`
  | 'Transform_1'

// TODO: document and split by `type`
export interface SkillFact {
  apply_count?: number;
  chance?: number;
  description?: string;
  distance?: number;
  dmg_multiplier?: number;
  duration: number;
  field_type?: 'Ethereal' | 'Water' | 'Fire' | 'Ice' | 'Lightning' | 'Smoke' | 'Light' | 'Poison' | 'Dark';
  finisher_type?: 'Leap' | 'Projectile' | 'Whirl' | 'Blast';
  hit_count?: number;
  icon: string;
  percent?: number;
  prefix?: {
    description?: string;
    icon: string;
    status?: string;
    text: string;
  };
  status?: string;
  target?: 'Healing' | 'Precision' | 'Vitality' | 'Power';
  text: string;
  type: 'Range' | 'Damage' | 'Number' | 'Distance' | 'ComboField' | 'ComboFinisher' | 'Buff' | 'AttributeAdjust' | 'Recharge' | 'Time' | 'Unblockable' | 'Radius' | 'Duration' | 'Percent' | 'StunBreak' | 'PrefixedBuff' | 'NoData' | 'HealingAdjust';
  value: number | boolean;
}

export interface SkillFactTraited extends SkillFact {
  /** Trait id of the trait that has to be selected for this fact to be active */
  requires_trait: number;

  /** Skill fact that is overridden if the required trait is selected */
  overrides?: number;
}
