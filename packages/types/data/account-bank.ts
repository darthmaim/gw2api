import type { ItemStack } from './item';

/**
 * Account Bank.
 * Required scopes: account, inventories
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/bank
 */
export type AccountBank = Array<ItemStack | null>;
