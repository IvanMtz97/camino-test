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
      <Link
        data-testid={"pokemon-link-" + pokemon.id || pokemon.url.split('/')[6]}
        key={pokemon.name}
        className="pokemons-list-item"
        to={`pokemon/${pokemon.id || pokemon.url.split('/')[6]}`}
      >
        {pokemon.name}
      </Link>
    )
  }, []);
  
  return (
    <div data-testid="pokemons-list-container" className="pokemons-list-container">
      {listIsEmpty && (<span data-testid="no-results-span">No results</span>)}
      {pokemons.map(renderPokemonRow)}
      {pokemons.length === 0 && !loading}
      {loading && <span data-testid="loading-pokemons-indicator">Loading pokemons...</span>}
    </div>
  )
}

export default PokemonsList;
