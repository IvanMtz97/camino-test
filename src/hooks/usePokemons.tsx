import { useState, useCallback } from "react";
import { getPokemons } from "../services/pokemons";
import { GetPokemonsApiParams, Pokemon } from "../types/pokemons.types";

function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [maxPokemons, setMaxPokemons] = useState(0);
  const [arePokemonsLoading, setArePokemonsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = useCallback(async (params: GetPokemonsApiParams) => {
    try {
      const response = await getPokemons(params);
      setPokemons(response.results);
      setArePokemonsLoading(false);
      setMaxPokemons(response.count);
    } catch (error) {
      setError(error + "");
      setArePokemonsLoading(false);
    }
  }, []);

  return {
    arePokemonsLoading,
    pokemons,
    error,
    fetchPokemons,
    maxPokemons,
  }
}

export default usePokemons;
