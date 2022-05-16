import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Header, Input, Select, Card, ModalPokemon } from '../../components'
import { ItemsProps } from '../../components/Select/interface'
import { api } from '../../services/api'
import { PokemonProps } from '../../contexts/interfaces'
import { Container, Content, Title, ContainerSelect, ContainerCard } from './styles'
import { usePokemons } from '../../hooks/usePokemons'
import { useCallback } from 'react'
import { clearCharacter } from '../../utils/clearCharacter'

export const Dashboard = () => {

    const { types, pokemons, getPokemonSearched, pokemonFounded } = usePokemons()

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState('')
    

    const handleSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        let value = clearCharacter(target.value || "");

        target.value = value;
  
        getPokemonSearched(value)
     }, []);

     const handleOpenModalPokemon = (name: string) => {
        setSelectedPokemon(name)
        setIsOpenModal(true)
     }

    return (
        <Container>

            <Header />
        

            <Content>
                <Title>Mais de 250 Pokemons para você escolher o seu favorito</Title>                               
                <Input type='search' placeholder='Pesquisar pokemon' icon={MagnifyingGlass} onChange={handleSearch}  id='searchPokemon' />

                { isOpenModal && (<ModalPokemon name={selectedPokemon} closeModal={() => setIsOpenModal(false)} />) }

                <ContainerSelect>
                    <Select title="Tipo" items={types} />

                </ContainerSelect>

                <ContainerCard>
                    { pokemonFounded.name ?
                     (
                        <Card name={pokemonFounded.name} key={pokemonFounded.name} onClick={() => handleOpenModalPokemon(pokemonFounded.name)} />
                     ) 
                     : pokemons && 
                        pokemons.map(pokemon => (
                            <Card name={pokemon.name} key={pokemon.name} onClick={() => handleOpenModalPokemon(pokemon.name)} />
                        ) )
                    }
                    
                </ContainerCard>
    
            </Content>
            
        </Container>
    )
}