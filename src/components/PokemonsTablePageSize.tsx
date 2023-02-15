import React from "react";

interface PokemonsTablePageSizeProps {
  currentSize: number;
  maxSize: number;
  onChange: (value: string) => void;
} 

function PokemonsTablePageSize({ currentSize, maxSize, onChange }: PokemonsTablePageSizeProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value);
  }
  return (
    <div className="pokemons-table-page-size-container">
      <span>Showing: </span>
      <select onChange={handleChange} defaultValue={currentSize + ""} name="pokemons-table-page-size-select">
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

export default PokemonsTablePageSize;
