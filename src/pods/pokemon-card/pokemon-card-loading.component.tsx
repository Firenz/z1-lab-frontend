import React from 'react';
import pokeball from 'img/pokeball-corner.svg';
import 'css/App.css';

export const PokemonCardLoadingComponent: React.FC = () => {

  return (
    <React.Fragment>
      <section className="Pokemon-card">
        <img
          src={pokeball}
          className="Pokemon-card-logo"
          alt="pokeball"
          aria-hidden="true"
        />
        <div className="Pokemon-card-body">
          Loading...
        </div>
      </section>
    </React.Fragment>
  );
};
