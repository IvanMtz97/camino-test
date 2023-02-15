import React from 'react';
import * as PokemonsService from "../services/pokemons";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PokemonsView from '../views/PokemonsView';

const getPokemonsSpy = jest.spyOn(PokemonsService, 'getPokemons');
const getPokemonByNameSpy = jest.spyOn(PokemonsService, 'getPokemonByName');
const getPokemonByIdSpy = jest.spyOn(PokemonsService, 'getPokemonById');

test('Should render loading indicator while fetching pokemons', () => {
  render(<PokemonsView />);
  const loadingIndicator = screen.getByTestId("loading-pokemons-indicator");
  expect(loadingIndicator).toBeInTheDocument();
});

test('Should call getPokemons service to fetch first 10 pokemons', () => {
  render(<PokemonsView />);
  expect(getPokemonsSpy).toHaveBeenCalledWith({ limit: 10 });
});

test('Should call getPokemonByName service with parameter bulbasaur on name input change', () => {
  render(<PokemonsView />);
  fireEvent.change(screen.getByTestId("name-filter-input"), {
    target: { value: 'bulbasaur' }
  });
  expect(getPokemonByNameSpy).toHaveBeenCalledWith("bulbasaur");
});

test('Should call getPokemonById service with parameter 2 on id input change', () => {
  render(<PokemonsView />);
  fireEvent.change(screen.getByTestId("id-filter-input"), {
    target: { value: '2' }
  });
  expect(getPokemonByIdSpy).toHaveBeenCalledWith(2);
});

test('Should render no results label when filtering with "asdasd" name', async () => {
  render(<PokemonsView />);
  fireEvent.change(screen.getByTestId("name-filter-input"), {
    target: { value: 'asdasd' }
  });
  expect(getPokemonByNameSpy).toHaveBeenCalledWith("asdasd");
  await waitFor(() => {
    expect(screen.getByTestId('no-results-span')).toBeInTheDocument();
  });
});