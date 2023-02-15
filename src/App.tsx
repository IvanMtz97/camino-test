import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import BaseLayout from './Layouts/Base';
import PokemonDetails from './views/PokemonDetails';
import PokemonsList from './views/PokemonsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout><PokemonsList /></BaseLayout>} />
        <Route path="/pokemon/:id" element={<BaseLayout><PokemonDetails /></BaseLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
