import { GetPokemonsApiParams, GetPokemonsApiResponse, PokemonDetails } from "../types/pokemons.types";
const API_URL: string = (process.env.REACT_APP_API_URL as string);

export async function getPokemons(params: GetPokemonsApiParams) {
  let URL = API_URL + 'pokemon';

  if (params) {
    URL += `?${Object.keys(params).map((paramKey) => `${paramKey}=${params[paramKey as keyof GetPokemonsApiParams]}`).join('&')}`;
  }
  const response = await fetch(URL);
  return await response.json() as GetPokemonsApiResponse;
}

export async function getPokemonById(id: number) {
  const response = await fetch(API_URL + 'pokemon/' + id);
  return await response.json() as PokemonDetails;
}

export async function getPokemonByName(name: string) {
  const response = await fetch(API_URL + 'pokemon/' + name);
  return await response.json();
}