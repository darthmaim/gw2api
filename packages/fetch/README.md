# `@gw2api/fetch`

This package provides a tiny wrapper around native fetch to call the Guild Wars 2 API that returns typesafe responses.

## Usage

```ts
import { fetchGw2Api } from '@gw2api/fetch';

const item = await fetchGw2Api('/v2/items/1234');
// -> { id: number, name: string, ... }
```

## Installation

```sh
npm i @gw2api/fetch
```

## Contributing

See [parent readme](../../README.md#contributing).

## License

Licensed under the [MIT License](./LICENSE).
