import { useState, useCallback } from "react";
import { getPokemonById, getPokemonByName, getPokemons } from "../services/pokemons";
import { GetPokemonsApiParams, Pokemon } from "../types/pokemons.types";

function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [maxPokemons, setMaxPokemons] = useState(0);
  const [arePokemonsLoading, setArePokemonsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = useCallback(async (params: GetPokemonsApiParams) => {
    setArePokemonsLoading(true);
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

  const fetchPokemonsByName = useCallback(async (name: string) => {
    setArePokemonsLoading(true);
    setPokemons([]);
    try {
      const response = await getPokemonByName(name);
      setPokemons([{
        id: response.id,
        name,
        url: '',
      }]);
      setArePokemonsLoading(false);
    } catch (error) {
      setError(error + "");
      setArePokemonsLoading(false);
    }
  }, []);



  const fetchPokemonsById = useCallback(async (id: string) => {
    setArePokemonsLoading(true);
    setPokemons([]);
    try {
      const response = await getPokemonById(Number(id));
      setPokemons([{
        id,
        name: response.name,
        url: '',
      }]);
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
    maxPokemons,
    fetchPokemonsByName,
    fetchPokemonsById,
  }
}

export default usePokemons;
