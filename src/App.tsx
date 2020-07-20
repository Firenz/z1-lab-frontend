import React from 'react';
import 'css/App.css';
import pokeball from 'img/pokeball.svg';
import { PokemonList } from 'components';

function App() {
  return (
    <div className="App">
      <img
        src={pokeball}
        className="App-logo"
        alt="pokeball"
        aria-hidden="true"
      />
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <main className="App-main">
        <PokemonList />
      </main>
    </div>
  );
}

export default App;
