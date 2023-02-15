export interface Pokemon {
  name: string;
  url: string;
}

export interface GetPokemonsApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface GetPokemonsApiParams {
  limit?: number;
  offset?: number;
}