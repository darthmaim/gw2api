export namespace Gw2Api {
  export namespace Commerce {
    export type Price = {
      id: number;
      whitelisted: boolean;
      buys: { quantity: number; unit_price: number; } | undefined
      sells: { quantity: number; unit_price: number; } | undefined
    }
  }

  export type Skill = {
    attunement?: 'Water' | 'Air' | 'Fire' | 'Earth';
    bundle_skills?: number[];
    categories?: string[];
    chat_link: string;
    cost?: number;
    description: string;
    dual_attunement?: 'Earth' | 'Water' | 'Air';
    dual_wield?: 'Dagger' | 'Pistol' | 'None' | 'Nothing';
    facts?: {
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
    }[];
    flags: string[];
    flip_skill?: number;
    icon?: string;
    id: number;
    initiative?: number;
    name: string;
    next_chain?: number;
    prev_chain?: number;
    professions?: string[];
    slot?: 'Profession_2' | 'Downed_4' | 'Weapon_3' | 'Weapon_1' | 'Weapon_5' | 'Profession_1' | 'Profession_3' | 'Profession_4' | 'Weapon_2' | 'Weapon_4' | 'Utility' | 'Heal' | 'Downed_1' | 'Downed_3' | 'Elite' | 'Downed_2' | 'Toolbelt' | 'Transform_1' | 'Pet' | 'Profession_5';
    specialization?: number;
    subskills?: {
      attunement: 'Fire' | 'Earth' | 'Air' | 'Water';
      form?: 'CelestialAvatar';
      id: number;
    }[];
    toolbelt_skill?: number;
    traited_facts?: {
      apply_count?: number;
      description?: string;
      distance?: number;
      dmg_multiplier?: number;
      duration: number;
      hit_count?: number;
      icon: string;
      overrides: number;
      percent?: number;
      prefix?: {
        description?: string;
        icon: string;
        status?: string;
        text: string;
      };
      requires_trait: number;
      status?: string;
      target?: 'Power' | 'Healing';
      text: string;
      type: 'Buff' | 'Number' | 'Distance' | 'Time' | 'PrefixedBuff' | 'Duration' | 'Percent' | 'Damage' | 'NoData' | 'AttributeAdjust';
      value?: number;
    }[];
    transform_skills?: number[];
    type?: 'Profession' | 'Weapon' | 'Utility' | 'Heal' | 'Elite' | 'Bundle' | 'Toolbelt' | 'Monster' | 'Transform' | 'Pet';
    weapon_type?: 'None' | 'Dagger' | 'Focus' | 'Staff' | 'Scepter' | 'Sword' | 'Trident' | 'Pistol' | 'Rifle' | 'Shield' | 'Speargun' | 'Greatsword' | 'Mace' | 'Torch' | 'Hammer' | 'Spear' | 'Axe' | 'Warhorn' | 'Shortbow' | 'Longbow';
  };

  export type Skin = {
    description?: string;
    details?: {
      damage_type?: 'Physical' | 'Choking' | 'Fire' | 'Lightning' | 'Ice';
      dye_slots?: {
        default: DyeSlot[];
        overrides: {
          AsuraFemale?: DyeSlot[];
          AsuraMale?: DyeSlot[];
          CharrFemale?: DyeSlot[];
          CharrMale?: DyeSlot[];
          HumanFemale?: DyeSlot[];
          HumanMale?: DyeSlot[];
          NornFemale?: DyeSlot[];
          NornMale?: {
            color_id: number;
            material: 'metal' | 'leather' | 'cloth';
          }[];
          SylvariFemale?: DyeSlot[];
          SylvariMale?: null[];
        };
      };
      type: 'Leggings' | 'Coat' | 'Boots' | 'Gloves' | 'Shoulders' | 'Helm' | 'HelmAquatic' | 'Foraging' | 'Logging' | 'Mining' | 'LargeBundle' | 'Rifle' | 'SmallBundle' | 'Toy' | 'ToyTwoHanded' | 'Axe' | 'Staff' | 'Hammer' | 'Pistol' | 'Longbow' | 'Dagger' | 'Sword' | 'Shortbow' | 'Focus' | 'Torch' | 'Spear' | 'Mace' | 'Speargun' | 'Greatsword' | 'Scepter' | 'Warhorn' | 'Shield' | 'Trident' | 'Lure' | 'Bait' | 'Fishing';
      weight_class?: 'Heavy' | 'Light' | 'Medium' | 'Clothing';
    };
    flags: string[];
    icon?: string;
    id: number;
    name: string;
    rarity: 'Basic' | 'Masterwork' | 'Legendary' | 'Rare' | 'Exotic' | 'Ascended';
    restrictions: string[];
    type: 'Armor' | 'Back' | 'Gathering' | 'Weapon';
  };

  type DyeSlot = {
    color_id: number;
    material: 'leather' | 'cloth' | 'metal';
  }

  export type Recipe = {
    chat_link: string;
    disciplines: string[];
    flags: string[];
    id: number;
    ingredients: {
      count: number;
      id: number;
      type: 'Item' | 'GuildUpgrade' | 'Currency';
    }[];
    min_rating: number;
    output_item_count: number;
    output_item_id: number;
    output_upgrade_id?: number;
    time_to_craft_ms: number;
    type: 'Refinement' | 'Insignia' | 'Inscription' | 'Shoulders' | 'Boots' | 'Gloves' | 'Coat' | 'Helm' | 'Leggings' | 'Component' | 'UpgradeComponent' | 'Bag' | 'Bulk' | 'Snack' | 'Seasoning' | 'IngredientCooking' | 'Soup' | 'Meal' | 'Dessert' | 'Feast' | 'Dye' | 'Amulet' | 'Ring' | 'Earring' | 'Staff' | 'Trident' | 'Scepter' | 'Focus' | 'Potion' | 'Consumable' | 'Rifle' | 'Warhorn' | 'LongBow' | 'ShortBow' | 'Torch' | 'Speargun' | 'Pistol' | 'Shield' | 'Harpoon' | 'Sword' | 'Axe' | 'Dagger' | 'Greatsword' | 'Hammer' | 'Mace' | 'RefinementObsidian' | 'RefinementEctoplasm' | 'Backpack' | 'GuildDecoration' | 'LegendaryComponent' | 'GuildConsumableWvw' | 'GuildConsumable';
  };

  export type Achievement = {
    bits?: {
      id: number;
      text: string;
      type: 'Item' | 'Skin' | 'Text' | 'Minipet';
    }[];
    description: string;
    flags: string[];
    icon?: string;
    id: number;
    locked_text: string;
    name: string;
    point_cap?: number;
    prerequisites?: number[];
    requirement: string;
    rewards?: {
      count?: number;
      id: number;
      region?: 'Maguuma' | 'Tundra' | 'Unknown' | 'Desert' | 'Tyria';
      type: 'Item' | 'Mastery' | 'Title' | 'Coins';
    }[];
    tiers: {
      count: number;
      points: number;
    }[];
    type: 'Default' | 'ItemSet';
  };

  export namespace Achievement {
    export type Group = {
      categories: number[];
      description: string;
      id: string;
      name: string;
      order: number;
    };

    export type Category = {
      achievements: {
        flags?: string[];
        id: number;
        level?: number[];
        required_access?: {
          condition: 'NoAccess' | 'HasAccess';
          product: 'PathOfFire' | 'HeartOfThorns';
        };
      }[];
      description: string;
      icon: string;
      id: number;
      name: string;
      order: number;
      tomorrow?: {
        flags: string[];
        id: number;
        level?: number[];
        required_access?: {
          condition: 'NoAccess' | 'HasAccess';
          product: 'PathOfFire' | 'HeartOfThorns';
        };
      }[];
    };
  }

  export type Currency = {
    id: number;
    name: string;
    description: string;
    order: number;
    icon: string;
  }

  export type Title = {
    id: number;
    name: string;
    achievement?: number;
    achievements?: number[];
    ap_required?: number;
  }
}
