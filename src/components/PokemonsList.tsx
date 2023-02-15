import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../types/pokemons.types";
import "../styles/PokemonsList.css";   

interface PokemonsListProps {
  pokemons: Pokemon[];
  loading: boolean;
}

function PokemonsList({ pokemons, loading }: PokemonsListProps) {
  const listIsEmpty = pokemons.length === 0 && !loading;
  const renderPokemonRow = useCallback((pokemon: Pokemon, index: number) => {
    return (
      <Link key={pokemon.name} className="pokemons-list-item" to={`pokemon/${pokemon.id || pokemon.url.split('/')[6]}`}>
        {pokemon.name}
      </Link>
    )
  }, []);
  
  return (
    <div className="pokemons-list-container">
      {listIsEmpty && (<span>No results</span>)}
      {pokemons.map(renderPokemonRow)}
      {pokemons.length === 0 && !loading}
      {loading && <span>Loading pokemons...</span>}
    </div>
  )
}

export default PokemonsList;
