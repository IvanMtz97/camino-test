import { useCallback, useEffect, useState } from "react";
import PokemonsTable from "../components/PokemonsTable";
import PokemonsTablePageSize from "../components/PokemonsTablePageSize";
import usePokemons from "../hooks/usePokemons";
import '../styles/PokemonsList.css';

function PokemonsList() {
  const [limit, setLimit] = useState(10);
  const {
    pokemons,
    arePokemonsLoading,
    error,
    fetchPokemons,
    maxPokemons,
  } = usePokemons();

  const handlePageSizeChange = useCallback((value: string) => {
    setLimit(Number(value));
  }, [setLimit]);
  
  useEffect(() => {
    fetchPokemons({ limit });
  }, [fetchPokemons, limit]);

  return (
    <div className="pokemons-list-container">
      {error && <span>An error has occured</span>}
      <PokemonsTable
        loading={arePokemonsLoading}
        pokemons={pokemons}
      />
      {(!arePokemonsLoading && pokemons.length > 0) && (
        <PokemonsTablePageSize
          currentSize={limit}
          maxSize={maxPokemons}
          onChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}

export default PokemonsList;
