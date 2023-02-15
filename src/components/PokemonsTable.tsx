import { useCallback } from "react";
import { Pokemon } from "../types/pokemons.types";
import "../styles/PokemonsTable.css";

interface PokemonsTableProps {
  pokemons: Pokemon[];
  loading: boolean;
}

function PokemonsTable({ pokemons, loading }: PokemonsTableProps) {
  const tableIsEmpty = pokemons.length === 0 && !loading;
  console.log('ps', pokemons);
  const renderPokemonRow = useCallback((pokemon: Pokemon, index: number) => {
    return (
      <tr>
        <td>{pokemon.name}</td>
        <td>{pokemon.url}</td>
      </tr>
    )
  }, []);
  
  return (
    <table className="pokemons-table">
      <thead>
        <tr>
          <th className="pokemons-table-name-column">Name</th>
          <th className="pokemons-table-url-column">Url</th>
        </tr>
      </thead>
      <tbody>
        {tableIsEmpty && (<span>No results</span>)}
        {pokemons.map(renderPokemonRow)}
        {pokemons.length === 0 && !loading}
        {loading && <tr><td>Loading pokemons...</td><td></td></tr>}
      </tbody>
    </table>
  )
}

export default PokemonsTable;
