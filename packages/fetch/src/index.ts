import type { AuthenticatedOptions, EndpointType, KnownEndpoint, LocalizedOptions, OptionsByEndpoint } from '@gw2api/types/endpoints';
import { SchemaVersion } from '@gw2api/types/schema';

// TODO: make `options` optional if `OptionsByEndpoint<Url>` only contains optional props

export function fetchGw2Api<
  Url extends KnownEndpoint | (string & {}),
  Schema extends SchemaVersion = undefined
>(
  endpoint: Url,
  options: { schema?: Schema } & OptionsByEndpoint<Url> & FetchOptions
): Promise<EndpointType<Url, Schema>> {
  const url = new URL(endpoint, 'https://api.guildwars2.com/');

  if(options.schema) {
    url.searchParams.set('v', options.schema);
  }
  if(hasLanguage(options)) {
    url.searchParams.set('lang', options.language);
  }
  if(hasAccessToken(options)) {
    url.searchParams.set('access_token', options.accessToken);
  }

  return fetch(url, { redirect: 'manual', signal: options.signal, cache: options.cache }).then((r) => {
    if(!r.ok) {
      throw new Gw2ApiError( `The GW2 API call to '${url.toString()}' returned ${r.status} ${r.statusText}.`, r);
    }

    // TODO: catch more errors

    return r.json();
  });
}

export type FetchOptions = {
  /** @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal */
  signal?: AbortSignal,

  /** @see https://developer.mozilla.org/en-US/docs/Web/API/Request/cache */
  cache?: RequestCache,
}

export class Gw2ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
    this.name = 'Gw2ApiError';
  }
}

function hasLanguage(options: OptionsByEndpoint<any>): options is LocalizedOptions {
  return 'language' in options;
}

function hasAccessToken(options: OptionsByEndpoint<any>): options is AuthenticatedOptions {
  return 'accessToken' in options;
}
