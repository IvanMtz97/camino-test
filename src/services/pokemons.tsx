import { GetPokemonsApiParams, GetPokemonsApiResponse } from "../types/pokemons.types";

export async function getPokemons(params: GetPokemonsApiParams) {
  let URL = 'https://pokeapi.co/api/v2/pokemon';

  if (params) {
    URL += `?${Object.keys(params).map((paramKey) => `${paramKey}=${params[paramKey as keyof GetPokemonsApiParams]}`).join('&')}`;
  }
  const response = await fetch(URL);
  return await response.json() as GetPokemonsApiResponse;
}
