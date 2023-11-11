import type { EndpointType, KnwownEndpoints } from '@gw2api/types';

export function fetchGw2Api<Url extends KnwownEndpoints | (string & {})>(endpoint: Url): Promise<EndpointType<Url>> {
  const url = new URL(endpoint, 'https://api.guildwars2.com/');

  return fetch(url).then((r) => {
    if(!r.ok) {
      throw new Error( `The GW2 API call to '${url.toString()}' returned ${r.status} ${r.statusText}.`);
    }

    return r.json();
  });
}
