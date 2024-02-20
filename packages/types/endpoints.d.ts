import { SchemaAfter, SchemaVersionInput } from './schema';

export type KnwownAuthenticatedEndpoints =
  | '/v2/account'
  | '/v2/account/achievements'
  | '/v2/account/bank'
  | '/v2/account/buildstorage'
  | '/v2/account/dailycrafting'
  | '/v2/account/dungeons'
  | '/v2/account/dyes'
  | '/v2/account/emotes'
  | '/v2/account/finishers'
  | '/v2/account/gliders'
  | '/v2/account/home/cats'
  | '/v2/account/home/nodes'
  | '/v2/account/inventory'
  | '/v2/account/jadebots'
  | '/v2/account/legendaryarmory'
  | '/v2/account/luck'
  | '/v2/account/mail'
  | '/v2/account/mailcarriers'
  | '/v2/account/mapchests'
  | '/v2/account/masteries'
  | '/v2/account/mastery/points'
  | '/v2/account/materials'
  | '/v2/account/minis'
  | '/v2/account/mounts/skins'
  | '/v2/account/mounts/types'
  | '/v2/account/novelties'
  | '/v2/account/outfits'
  | '/v2/account/progression'
  | '/v2/account/pvp/heroes'
  | '/v2/account/raids'
  | '/v2/account/recipes'
  | '/v2/account/skiffs'
  | '/v2/account/skins'
  | '/v2/account/titles'
  | '/v2/account/wallet'
  | '/v2/account/worldbosses'
  | '/v2/characters'
  | `/v2/characters/${string}/backstory`
  | `/v2/characters/${string}/buildtabs`
  | `/v2/characters/${string}/buildtabs/active`
  | `/v2/characters/${string}/core`
  | `/v2/characters/${string}/crafting`
  | `/v2/characters/${string}/dungeons`
  | `/v2/characters/${string}/equipment`
  | `/v2/characters/${string}/equipmenttabs`
  | `/v2/characters/${string}/equipmenttabs/active`
  | `/v2/characters/${string}/heropoints`
  | `/v2/characters/${string}/inventory`
  | `/v2/characters/${string}/quests`
  | `/v2/characters/${string}/recipes`
  | `/v2/characters/${string}/sab`
  | `/v2/characters/${string}/skills`
  | `/v2/characters/${string}/specializations`
  | `/v2/characters/${string}/training`
  | '/v2/commerce/delivery'
  | '/v2/commerce/transactions'
  | '/v2/createsubtoken'
  | `/v2/guild/${string}`
  | `/v2/guild/${string}/log`
  | `/v2/guild/${string}/members`
  | `/v2/guild/${string}/ranks`
  | `/v2/guild/${string}/stash`
  | `/v2/guild/${string}/storage`
  | `/v2/guild/${string}/teams`
  | `/v2/guild/${string}/treasury`
  | `/v2/guild/${string}/upgrades`
  | '/v2/pvp/games'
  | '/v2/pvp/standings'
  | '/v2/pvp/stats'
  | '/v2/tokeninfo'

export type KnownUnauthorizedEndpoints =
  | '/v2/account/home'
  | '/v2/account/mounts'
  | '/v2/achievements'
  | '/v2/achievements/categories'
  | '/v2/achievements/daily'
  | '/v2/achievements/daily/tomorrow'
  | '/v2/achievements/groups'
  | '/v2/adventures'
  | `/v2/adventures/${string}/leaderboards`
  | `/v2/adventures/${string}/leaderboards/${string}/${string}`
  | '/v2/backstory/answers'
  | '/v2/backstory/questions'
  | '/v2/build'
  | '/v2/colors'
  | '/v2/commerce/exchange'
  | '/v2/commerce/listings'
  | '/v2/commerce/prices'
  | '/v2/continents'
  | '/v2/currencies'
  | '/v2/dailycrafting'
  | '/v2/dungeons'
  | '/v2/emblem'
  | '/v2/emotes'
  | '/v2/events'
  | '/v2/events-state'
  | '/v2/files'
  | '/v2/finishers'
  | '/v2/gemstore/catalog'
  | '/v2/gliders'
  | '/v2/guild/permissions'
  | '/v2/guild/search'
  | '/v2/guild/upgrades'
  | '/v2/home'
  | '/v2/home/cats'
  | '/v2/home/nodes'
  | '/v2/items'
  | '/v2/itemstats'
  | '/v2/jadebots'
  | '/v2/legendaryarmory'
  | '/v2/legends'
  | '/v2/mailcarriers'
  | '/v2/mapchests'
  | '/v2/maps'
  | '/v2/masteries'
  | '/v2/materials'
  | '/v2/minis'
  | '/v2/mounts'
  | '/v2/mounts/skins'
  | '/v2/mounts/types'
  | '/v2/novelties'
  | '/v2/outfits'
  | '/v2/pets'
  | '/v2/professions'
  | '/v2/pvp'
  | '/v2/pvp/amulets'
  | '/v2/pvp/heroes'
  | '/v2/pvp/ranks'
  | '/v2/pvp/rewardtracks'
  | '/v2/pvp/runes'
  | '/v2/pvp/seasons'
  | `/v2/pvp/seasons/${string}/leaderboards`
  | `/v2/pvp/seasons/${string}/leaderboards/${string}/${string}`
  | '/v2/pvp/sigils'
  | '/v2/quaggans'
  | '/v2/quests'
  | '/v2/races'
  | '/v2/raids'
  | '/v2/recipes'
  | '/v2/recipes/search'
  | '/v2/skiffs'
  | '/v2/skills'
  | '/v2/skins'
  | '/v2/specializations'
  | '/v2/stories'
  | '/v2/stories/seasons'
  | '/v2/titles'
  | '/v2/traits'
  | '/v2/vendors'
  | '/v2/worldbosses'
  | '/v2/worlds'
  | '/v2/wvw/abilities'
  | '/v2/wvw/matches'
  | '/v2/wvw/matches/overview'
  | '/v2/wvw/matches/scores'
  | '/v2/wvw/matches/stats'
  | `/v2/wvw/matches/stats/${string}/guilds/${string}`
  | `/v2/wvw/matches/stats/${string}/teams/${string}/top/kdr`
  | `/v2/wvw/matches/stats/${string}/teams/${string}/top/kills`
  | '/v2/wvw/objectives'
  | '/v2/wvw/ranks'
  | '/v2/wvw/rewardtracks'
  | '/v2/wvw/upgrades'

export type KnownBulkExpandedEndpoints =
  | '/v2/items'

export type KnownBulkExpandedLocalizedEndpoints =
  | '/v2/items'

export type KnownLocalizedEndpoints =
  | '/v2/items'

export type KnwownEndpoints = KnwownAuthenticatedEndpoints | KnownUnauthorizedEndpoints | KnownBulkExpandedEndpoints | KnownLocalizedEndpoints;

// helper types for parameters
type CombineParameters<P1 extends string, P2 extends string> = `${P1}&${P2}` | `${P2}&${P1}`;

type WithParameters<Url extends string, Parameters extends string | undefined = undefined> =
  Parameters extends undefined ? Url : `${Url}?${Parameters}`;

// helper for paginated endpoints
type PaginationParameters = `page=${number}` | CombineParameters<`page=${number}`, `page_size=${number}`>;

// helper types for bulk requests
type BulkExpandedSingleEndpointUrl<Endpoint extends KnownBulkExpandedEndpoints, Id extends string | number> = `${Endpoint}/${Id}` | WithParameters<Endpoint, `id=${Id}`>
type BulkExpandedManyEndpointUrl<Endpoint extends KnownBulkExpandedEndpoints> = WithParameters<Endpoint, `ids=${string}` | PaginationParameters>
type BulkExpandedEndpointUrl<Endpoint extends KnownBulkExpandedEndpoints, Id extends string | number = number> =
  Endpoint | BulkExpandedSingleEndpointUrl<Endpoint, Id> |  BulkExpandedManyEndpointUrl<Endpoint>

type BulkExpandedResponseType<Endpoint extends KnownBulkExpandedEndpoints, Url extends string, T, Id extends string | number = number> =
  Url extends Endpoint ? Id[] :
  Url extends BulkExpandedSingleEndpointUrl<Endpoint, Id> ? T :
  Url extends BulkExpandedManyEndpointUrl<Endpoint> ? T[] :
  unknown

// options
type Options = {}

export type LocalizedOptions = {
  language?: 'de' | 'en' | 'es' | 'fr'
}

export type AuthenticatedOptions = {
  accessToken: string
}

type OptionsByEndpoint<Endpoint extends string> =
  Endpoint extends KnownBulkExpandedEndpoints ? Options :
  Endpoint extends BulkExpandedManyEndpointUrl<KnownBulkExpandedEndpoints & KnownLocalizedEndpoints> ? Options & LocalizedOptions :
  Endpoint extends BulkExpandedSingleEndpointUrl<KnownBulkExpandedEndpoints & KnownLocalizedEndpoints, string> ? Options & LocalizedOptions :
  Endpoint extends KnownLocalizedEndpoints ? Options & LocalizedOptions :
  Endpoint extends KnwownAuthenticatedEndpoints ? Options & AuthenticatedOptions :
  Options

type SchemaFromOptions<O extends Options> =
  O extends undefined ? undefined :
  O extends { schema: infer Schema extends SchemaVersionInput } ? Schema :
  undefined;

// result type for endpoint
export type EndpointType<Url extends string, Schema extends SchemaVersionInput = undefined> =
  Url extends BulkExpandedEndpointUrl<'/v2/items'> ? BulkExpandedResponseType<'/v2/items', Url, Item<Schema>> :
  Url extends '/v2/quaggans' ? string[] :
  Url extends `/v2/characters?ids=${number}` ? { name: string }[] :
  Url extends '/v2/characters' ? string[] :
  unknown;

type ValidateEndpointUrl<T extends string> = unknown extends EndpointType<T> ? 'unknown endpoint url' : T;

// Test

interface ItemBase {
  id: number;
}
interface Item2020 extends ItemBase {
  details: object;
}
interface Item2022 extends Item2020 {
  name: string;
}

type Item<Schema extends SchemaVersionInput = undefined> =
  Schema extends undefined ? ItemBase :
  Schema extends SchemaAfter<'2022-03-09T02:00:00.000Z'> | 'latest' ? Item2022 :
  Schema extends SchemaAfter<'2020-11-17T00:30:00.000Z'> ? Item2020 :
  ItemBase
