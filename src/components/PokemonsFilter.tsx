import React, { useCallback } from "react";
import "../styles/PokemonsFilter.css";

interface PokemonsFilterProps {
  onNameChange: (name: string) => void;
  onIdChange: (id: string) => void;
  nameValue: string;
  idValue: string;
} 

function PokemonsFilter({ onNameChange, onIdChange, nameValue, idValue }: PokemonsFilterProps) {
  const handleNameInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value);
  }, [onNameChange]);

  const handleIdInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onIdChange(event.target.value);
  }, [onIdChange]);

  return (
    <div className="pokemons-filter-container">
      <input
        name="name-filter-input"
        placeholder="Filter by name"
        onChange={handleNameInputChange}
        value={nameValue}
      />
      <input
        name="id-filter-input"
        placeholder="Filter by id"
        onChange={handleIdInputChange}
        value={idValue}
      />
    </div>
  )
}

export default PokemonsFilter;
