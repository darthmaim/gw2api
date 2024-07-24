# @gw2api/types

## 0.0.11

### Patch Changes

- Fix `/v2/guild/upgrades` being matched as `/v2/guild/:id/` ([#59](https://github.com/GW2Treasures/gw2api-ts/pull/59) by [@darthmaim](https://github.com/darthmaim))

## 0.0.10

### Patch Changes

- Improve endpoint type resolution for endpoints that are both authenticated and localized ([#58](https://github.com/GW2Treasures/gw2api-ts/pull/58) by [@darthmaim](https://github.com/darthmaim))
- Add types for character endpoints ([#58](https://github.com/GW2Treasures/gw2api-ts/pull/58) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/characters`
  - `/v2/characters/:id/backstory`
  - `/v2/characters/:id/buildtabs`
  - `/v2/characters/:id/core`
  - `/v2/characters/:id/crafting`
  - `/v2/characters/:id/equipment`
  - `/v2/characters/:id/equipmenttabs`
  - `/v2/characters/:id/inventory`
  - `/v2/characters/:id/recipes`
  - `/v2/characters/:id/skills`
  - `/v2/characters/:id/specializations`
  - `/v2/characters/:id/training`
- Add types for new endpoints ([#56](https://github.com/GW2Treasures/gw2api-ts/pull/56) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/bank`
  - `/v2/account/inventory`
  - `/v2/account/material`
  - `/v2/materials`

## 0.0.9

### Patch Changes

- Fix type resolution for undefined schema ([#54](https://github.com/GW2Treasures/gw2api-ts/pull/54) by [@darthmaim](https://github.com/darthmaim))

## 0.0.8

### Patch Changes

- Enable `verbatimModuleSyntax` ([#49](https://github.com/GW2Treasures/gw2api-ts/pull/49) by [@darthmaim](https://github.com/darthmaim))

## 0.0.7

### Patch Changes

- Fix type for `/v2/commerce/prices` ([`eba7a59`](https://github.com/GW2Treasures/gw2api-ts/commit/eba7a5923b1a563517d12a6d15b96ef8ebe7eece) by [@darthmaim](https://github.com/darthmaim))

## 0.0.6

### Patch Changes

- Add types for `/v2/account/wallet` ([#43](https://github.com/GW2Treasures/gw2api-ts/pull/43) by [@darthmaim](https://github.com/darthmaim))
- Add types for `/v2/account/achievements` ([#41](https://github.com/GW2Treasures/gw2api-ts/pull/41) by [@darthmaim](https://github.com/darthmaim))
- Fix model schema resolution ([#39](https://github.com/GW2Treasures/gw2api-ts/pull/39) by [@darthmaim](https://github.com/darthmaim))
- Add types for wizards vault endpoints ([#47](https://github.com/GW2Treasures/gw2api-ts/pull/47) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/wizardsvault/daily`
  - `/v2/account/wizardsvault/listings`
  - `/v2/account/wizardsvault/special`
  - `/v2/account/wizardsvault/weekly`
  - `/v2/wizardsvault`
  - `/v2/wizardsvault/listings`
  - `/v2/wizardsvault/objectives`
- Add types for account endpoints that return a list of ids: ([#42](https://github.com/GW2Treasures/gw2api-ts/pull/42) by [@darthmaim](https://github.com/darthmaim))
  - `/v2/account/dyes`
  - `/v2/account/emotes`
  - `/v2/account/gliders`
  - `/v2/account/home/nodes`
  - `/v2/account/jadebots`
  - `/v2/account/mailcarriers`
  - `/v2/account/mapchests`
  - `/v2/account/minis`
  - `/v2/account/mounts/skins`
  - `/v2/account/mounts/types`
  - `/v2/account/novelties`
  - `/v2/account/outfits`
  - `/v2/account/pvp/heroes`
  - `/v2/account/raids`
  - `/v2/account/recipes`
  - `/v2/account/skiffs`
  - `/v2/account/skins`
  - `/v2/account/titles`
  - `/v2/account/worldbosses`

## 0.0.5

### Patch Changes

- 7aa6297: Fix typo in type `KnownAuthenticatedEndpoint`
- 8faa21a: Add `/v2/commerce/listings` and `/v2/commerce/prices` types
- 44e48ec: Add `/v2/commerce/transactions` endpoints

## 0.0.4

### Patch Changes

- 716cd7c: Update release workflow

## 0.0.3

### Patch Changes

- 561a2a7: Add types for /v2/quaggans and /v2/createsubtoken to data directory
