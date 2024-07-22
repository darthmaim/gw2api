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

  return fetch(url, { redirect: 'manual', signal: options.signal, cache: options.cache }).then(async (r) => {
    // check if the response is json (`application/json; charset=utf-8`)
    const isJson = r.headers.get('content-type').startsWith('application/json');

    // check if the response is an error
    if(!r.ok) {
      // if the response is JSON, it might have more details in the `text` prop
      if(isJson) {
        const error: unknown = await r.json();

        if(typeof error === 'object' && 'text' in error && typeof error.text === 'string') {
          throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' returned ${r.status} ${r.statusText}: ${error.text}.`, r);
        }
      }

      // otherwise just throw error with the status code
      throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' returned ${r.status} ${r.statusText}.`, r);
    }

    // if the response is not JSON, throw an error
    if(!isJson) {
      throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' did not respond with a JSON response`, r);
    }

    // parse json
    const json = await r.json();

    // check that json is not `["v1", "v2"]` which sometimes happens for authenticated endpoints
    if(url.toString() !== 'https://api.guildwars2.com/' && Array.isArray(json) && json.length === 2 && json[0] === 'v1' && json[1] === 'v2') {
      throw new Gw2ApiError(`The GW2 API call to '${url.toString()}' did returned an invalid response (["v1", "v2"])`, r);
    }

    // TODO: catch more errors

    return json;
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
