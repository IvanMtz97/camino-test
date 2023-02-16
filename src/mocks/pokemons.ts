import { GetPokemonsApiParams, GetPokemonsApiResponse } from "../types/pokemons.types";

export function getPokemonsMock(params: GetPokemonsApiParams): Promise<GetPokemonsApiResponse> {
  const response: GetPokemonsApiResponse = {
    count: 1000,
    next: "",
    previous: "",
    results: [],
  };

  if (params.limit) {
    response.results = Array.from(Array(10).keys()).map((value: number, index: number) => ({ id: index + "", name: `pokemon-${index}-name`, url: `pokemon-${index}-url` }));
  }

  return Promise.resolve(response);
}