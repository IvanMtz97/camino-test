import React from "react";

interface PokemonsListPageSizeProps {
  currentSize: number;
  maxSize: number;
  onChange: (value: string) => void;
} 

function PokemonsListPageSize({ currentSize, maxSize, onChange }: PokemonsListPageSizeProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value);
  }
  return (
    <div className="pokemons-list-page-size-container">
      <span>Showing: </span>
      <select data-testid="page-size-select" onChange={handleChange} defaultValue={currentSize + ""} name="pokemons-list-page-size-select">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value={maxSize + ""}>{maxSize}</option>
      </select>
      <span>results</span>
    </div>
  );
}

export default PokemonsListPageSize;
