import type { AuthenticatedOptions, EndpointType, KnownEndpoint, LocalizedOptions, OptionsByEndpoint } from '@gw2api/types/endpoints';
import { SchemaVersion } from '@gw2api/types/schema';

// TODO: make `options` optional if `OptionsByEndpoint<Url>` only contains optional props

export function fetchGw2Api<
  Url extends KnownEndpoint | (string & {}),
  Schema extends SchemaVersion = undefined
>(
  endpoint: Url,
  options: { schema?: Schema } & OptionsByEndpoint<Url>
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

  return fetch(url, { redirect: 'manual' }).then((r) => {
    if(!r.ok) {
      throw new Gw2ApiError( `The GW2 API call to '${url.toString()}' returned ${r.status} ${r.statusText}.`, r);
    }

    // TODO: catch more errors

    return r.json();
  });
}

export class Gw2ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
  }
}

function hasLanguage(options: OptionsByEndpoint<any>): options is LocalizedOptions {
  return 'language' in options;
}

function hasAccessToken(options: OptionsByEndpoint<any>): options is AuthenticatedOptions {
  return 'accessToken' in options;
}
