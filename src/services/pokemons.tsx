import { GetPokemonsApiResponse } from "../types/pokemons.types";

export async function getPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
  return await response.json() as GetPokemonsApiResponse;
}
