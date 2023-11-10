# `@gw2api/client`

This package provies a high level abstraction to access the Guild Wars 2 API in a typesafe way.

## Usage

> [!WARNING]  
> This package is still highly Work In Progress and the API might change drastically in the first few versions.


```ts
import { Gw2ApiClient } from '@gw2api/client';

const client = new Gw2ApiClient();

// get the first 10 items in german
const items = await client.items.lang('de').page(0, 10);
// -> Array<{ id: number, name: string, ... }>
```

## Installation

```sh
npm i @gw2api/client
```

## Contributing

See [parent readme](../../README.md#contributing).

## License

Licensed under the [MIT License](./LICENSE).
