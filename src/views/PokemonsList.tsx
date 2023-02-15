import { useEffect } from "react";
import PokemonsTable from "../components/PokemonsTable";
import usePokemons from "../hooks/usePokemons";
import '../styles/PokemonsList.css';

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
    <div className="pokemons-list-container">
      {error && <span>An error has occured</span>}
      <PokemonsTable
        loading={arePokemonsLoading}
        pokemons={pokemons}
      />
    </div>
  );
}

export default PokemonsList;
