import { useContext } from "react";
import { PokemonsContext } from '../contexts/pokemons'

export function usePokemons() {
   const value = useContext(PokemonsContext);

   return value;
}