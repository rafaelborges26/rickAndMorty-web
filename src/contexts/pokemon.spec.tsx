import { renderHook } from '@testing-library/react-hooks';
import { usePokemons } from '../hooks/usePokemons';
import { PokemonsProvider } from '../contexts/pokemons';

describe('DashboardTableUpdated hook', () => {
  it('should be able get and set functions hook', async () => {

    const { result } = renderHook(() => usePokemons(), {
      wrapper: PokemonsProvider,
    });

    
    result.current.getTypes();
    result.current.getPokemons();
    result.current.getDetailsPokemon('fire')  
    result.current.SelectTypePokemons('bulbasaur')
    result.current.getPokemonSearched('bulbasaur')
  });
});