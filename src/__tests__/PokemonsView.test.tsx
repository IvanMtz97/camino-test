import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getPokemonsMock } from '../mocks/pokemons';
import * as PokemonsService from "../services/pokemons";
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import PokemonsView from '../views/PokemonsView';

test('Should render loading indicator while fetching pokemons', () => {
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  const loadingIndicator = screen.getByTestId("loading-pokemons-indicator");
  expect(loadingIndicator).toBeInTheDocument();
});

test('Should call getPokemons service to fetch first 10 pokemons and render 10 pokemons', async () => {
  const getPokemonsSpy = jest.spyOn(PokemonsService, 'getPokemons').mockImplementation(getPokemonsMock);
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  expect(getPokemonsSpy).toHaveBeenCalledWith({ limit: 10 });
  await waitFor(() => {
    const pokemonsList = screen.getByTestId('pokemons-list-container');
    expect(pokemonsList.children.length).toBe(10);
  });
});

test('Should call getPokemons service to fetch first 50 pokemons using the page size selector', async () => {
  const getPokemonsSpy = jest.spyOn(PokemonsService, 'getPokemons').mockImplementation(getPokemonsMock);
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  await waitFor(() => {
    const pageSizeSelector = screen.getByTestId('page-size-select');
    fireEvent.change(pageSizeSelector, {
      target: { value: 50 },
    });
    expect(getPokemonsSpy).toHaveBeenCalledWith({ limit: 50 });
  });
});

test('Should call getPokemonByName service with parameter bulbasaur on name input change', async () => {
  const getPokemonByNameSpy = jest.spyOn(PokemonsService, 'getPokemonByName');
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  await waitFor(() => {
    fireEvent.change(screen.getByTestId("name-filter-input"), {
      target: { value: 'bulbasaur' }
    });
    expect(getPokemonByNameSpy).toHaveBeenCalledWith("bulbasaur");
  });
});

test('Should call getPokemonById service with parameter 2 on id input change', async () => {
  const getPokemonByIdSpy = jest.spyOn(PokemonsService, 'getPokemonById');
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  await waitFor(() => {
    fireEvent.change(screen.getByTestId("id-filter-input"), {
      target: { value: '2' }
    });
    expect(getPokemonByIdSpy).toHaveBeenCalledWith(2);
  });
});

test('Should redirect to pokemon details when clicking pokemon', async () => {
  const getPokemonsSpy = jest.spyOn(PokemonsService, 'getPokemons').mockImplementation(getPokemonsMock);
  const pokemonId = 1;
  render(
    <BrowserRouter>
      <PokemonsView />
    </BrowserRouter>
  );
  expect(getPokemonsSpy).toHaveBeenCalledWith({ limit: 10 });
  await waitFor(() => {
    fireEvent.click(screen.getByTestId('pokemon-link-' + pokemonId));
    expect(window.location.pathname).toBe('/pokemon/' + pokemonId);
  });
});