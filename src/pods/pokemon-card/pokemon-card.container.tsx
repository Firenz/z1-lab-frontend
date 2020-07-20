// @ts-nocheck
import React from 'react';
import { useQuery } from 'react-query';
import { mapperPokemonApiToVm, getPokemonApi } from 'core';
import { PokemonCardComponent } from './pokemon-card.component';

interface Props {
  pokemonId: number;
}

export const PokemonCardContainer: React.FC<Props> = (props: Props) => {
  const { pokemonId } = props;

  const { data, isLoading } = useQuery(pokemonId, async () => getPokemonApi(pokemonId));

  if (isLoading) return <React.Fragment></React.Fragment>;

  return <PokemonCardComponent pokemonData={mapperPokemonApiToVm(data)} />;
};
