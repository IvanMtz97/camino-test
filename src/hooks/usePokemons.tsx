import { useState, useCallback } from "react";
import { getPokemons } from "../services/pokemons";
import { Pokemon } from "../types/pokemons.types";

function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [arePokemonsLoading, setArePokemonsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = useCallback(async () => {
    try {
      const response = await getPokemons();
      setPokemons(response.results);
      setArePokemonsLoading(false);
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
  }
}

export default usePokemons;
