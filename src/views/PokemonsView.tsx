import { useCallback, useEffect, useState } from "react";
import PokemonsFilter from "../components/PokemonsFilter";
import PokemonsList from "../components/PokemonsList";
import PokemonsListPageSize from "../components/PokemonsListPageSize";
import usePokemons from "../hooks/usePokemons";
import '../styles/PokemonsView.css';

function PokemonsView() {
  const [limit, setLimit] = useState(10);
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const {
    pokemons,
    arePokemonsLoading,
    error,
    fetchPokemons,
    maxPokemons,
    fetchPokemonsByName,
    fetchPokemonsById,
  } = usePokemons();

  const handlePageSizeChange = useCallback((value: string) => {
    setLimit(Number(value));
  }, [setLimit]);

  const handleNameInputChange = useCallback((name: string) => {
    setNameValue(name);
  }, []);

  const handleIdInputChange = useCallback((id: string) => {
    setIdValue(id);
  }, []);
  
  useEffect(() => {
    if (nameValue.length) {
      fetchPokemonsByName(nameValue);
    } else if (idValue.length) {
      fetchPokemonsById(idValue);
    } else {
      fetchPokemons({ limit });
    }
  }, [fetchPokemons, fetchPokemonsByName, fetchPokemonsById, limit, nameValue, idValue]);

  useEffect(() => {
    setIdValue("");
  }, [nameValue]);

  useEffect(() => {
    setNameValue("");
  }, [idValue]);

  return (
    <div className="pokemons-list-view-container">
      {error && <span>An error has occured</span>}
      <PokemonsFilter
        onNameChange={handleNameInputChange}
        onIdChange={handleIdInputChange}
        nameValue={nameValue}
        idValue={idValue}
      />
      <PokemonsList
        loading={arePokemonsLoading}
        pokemons={pokemons}
      />
      {(!arePokemonsLoading && pokemons.length > 0 && !nameValue.length && !idValue.length) && (
        <PokemonsListPageSize
          currentSize={limit}
          maxSize={maxPokemons}
          onChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}

export default PokemonsView;
