import type { ItemStack } from './item';

/**
 * Account shared inventory slots.
 * Required scopes: account, inventories
 *
 * @see https://wiki.guildwars2.com/wiki/API:2/account/inventory
 */
export type AccountInventory = Array<SharedInventoryItemStack | null>;

// item stacks in the shared inventory can not be bound to a character
type SharedInventoryItemStack = Omit<ItemStack, 'binding' | 'bound_to'> & { binding?: 'Account' };
