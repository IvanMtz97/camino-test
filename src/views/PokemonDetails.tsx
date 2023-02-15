import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemonById } from "../services/pokemons";
import { PokemonDetails } from "../types/pokemons.types";
import "../styles/PokemonDetails.css";

function PokemonDetailsView() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadPokemonData = useCallback(async () => {
    try {
      const data = await getPokemonById(Number(params.id));
      setPokemonData(data);
      setLoading(false);
    } catch (err) {
      setError(err + "");
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    loadPokemonData();
  }, [loadPokemonData]);

  if (loading) return <span>Loading pokemon data...</span>;

  if (error && !loading) return <span>Pokemon doesnt exists</span>;

  return (
    <div className="pokemon-details-container">
      <img alt={pokemonData?.name + ""} src={pokemonData?.sprites.front_default + ""}/>
      <span><b>Id:</b> {pokemonData?.id}</span>
      <span><b>Name:</b> {pokemonData?.name}</span>
      <span><b>Order:</b> {pokemonData?.order}</span>
      <span><b>Weight:</b> {pokemonData?.weight} lbs</span>
    </div>
  );
}

export default PokemonDetailsView;
