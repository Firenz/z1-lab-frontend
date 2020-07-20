import React from 'react';
import { PokemonCardContainer } from 'pods';

export const PokemonList: React.FC = () => {
  const pokemonIds: number[] = Array.from(Array(10).keys());
  const pokemonList = pokemonIds.map((id: number) => {
    return <PokemonCardContainer key={id + 1} pokemonId={id + 1} />;
  });

  return <React.Fragment>{pokemonList}</React.Fragment>;
};
