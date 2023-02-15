export interface Pokemon {
  id?: string;
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  base_experience: number;
  id: number;
  height: number;
  order: number;
  weight: number;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
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