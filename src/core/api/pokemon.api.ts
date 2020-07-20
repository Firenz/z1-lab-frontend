export interface PokemonApi {
  id: string;
  name: string;
  sprites: PokemonApiSprites;
  types: PokemonApiTypes[];
}

export interface PokemonApiSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface PokemonApiTypes {
  slot: number;
  type: { name: string; url: string };
}

export const getPokemonApi = async (pokemonId: number) => {
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  return fetch(fetchUrl).then((response) => response.json());
};
