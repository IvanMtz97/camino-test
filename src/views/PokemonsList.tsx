import { useEffect } from "react";
import usePokemons from "../hooks/usePokemons";

function PokemonsList() {
  const {
    pokemons,
    arePokemonsLoading,
    error,
    fetchPokemons,
  } = usePokemons();
  
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <span>PokemonsList</span>
    </div>
  );
}

export default PokemonsList;
