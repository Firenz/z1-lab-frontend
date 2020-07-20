import React from 'react';
import { PokemonVm } from 'core';
import pokeball from 'img/pokeball-corner.svg';
import 'css/App.css';

interface Props {
  pokemonData: PokemonVm;
}

export const PokemonCardComponent: React.FC<Props> = (props: Props) => {
  let { pokemonData } = props;

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
          <div className="Pokemon-card-header">
            <h2 className="Pokemon-card-name">{pokemonData.name}</h2>
            <h3 className="Pokemon-card-id">
              {`#${pokemonData.id.toString().padStart(3, '0')}`}
            </h3>
          </div>
          <div className="Pokemon-card-main">
            <ul className="Pokemon-card-types-list">
              <li className="Pokemon-card-type-item">{pokemonData.types[0]}</li>
              {pokemonData.types[1] && <li className="Pokemon-card-type-item">{pokemonData.types[1]}</li>}
            </ul>
            <img
              src={pokemonData.spriteUrl}
              className="Pokemon-card-img"
              alt={`${pokemonData.name} sprite`}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
