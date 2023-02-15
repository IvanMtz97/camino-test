import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import PokemonDetails from './views/PokemonDetails';
import PokemonsList from './views/PokemonsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
