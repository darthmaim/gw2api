# `@gw2api/types`

TypeScript types for all datastructures used by the Guild Wars 2 API.

## Usage

You can use this library to add strong types when working with the Guild Wars 2 API and not using `@gw2api/fetch` or `@gw2api/client`, for example when using your own api client, working with data from a database, or writing helper functions.

```ts
import type { Gw2Api, EndpointType } from '@gw2api/types';

function getItemName(item: Gw2Api.V2.Item) {
  return item.name;
}

type ItemEndpointResponse = EndpointType<'/v2/items?ids=1,2,3'>;
// -> Array<{ id: number, name: string, ... }>
```

## Installation

```sh
npm i @gw2api/types
```

## Contributing

See [parent readme](../../README.md#contributing).

## License

Licensed under the [MIT License](./LICENSE).
