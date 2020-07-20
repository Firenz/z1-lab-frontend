import { PokemonApi, PokemonApiTypes } from 'core';

export interface PokemonVm {
  id: string;
  name: string;
  types: string[];
  spriteUrl: string;
}

export const mapperPokemonApiToVm = (pokemonApi: PokemonApi): PokemonVm => {
  const type1: PokemonApiTypes = pokemonApi.types[0];
  let type2: PokemonApiTypes = pokemonApi.types[1];
  if (type2 == null) {
    type2 = {
      slot: 1,
      type: {
        name: '',
        url: '',
      },
    } as PokemonApiTypes;
  }

  const pokemonVm: PokemonVm = {
    id: pokemonApi.id,
    name: pokemonApi.name,
    types: [type1.type.name, type2.type.name],
    spriteUrl: pokemonApi.sprites.front_default || '',
  };

  return pokemonVm;
};
