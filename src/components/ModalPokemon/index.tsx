import { useEffect, useState } from 'react';
import { ArrowLeft } from 'phosphor-react'
import { ModalPokemonProps, StatsProps } from './interfaces';
import { ModalContainer, ContainerArrow, ImageContainer, InfoContainer, ContainerAtributes, Height, Power, Weight, Abilities, Attribute } from './styles';
import { usePokemons } from '../../hooks/usePokemons'
import { api } from '../../services/api';
import { clearCharacter } from '../../utils/clearCharacter';


export const ModalPokemon = ( { name, closeModal, backgroundModal } :ModalPokemonProps) => {

    const { getPokemonAllAtributes, pokemonAllAtributes, pokemonSpecies } = usePokemons()

    const [stats, setStats] = useState<StatsProps[]>([])

    console.log(stats, 'stats')

    useEffect(() => {
        getPokemonAllAtributes(name)

        if(pokemonAllAtributes.stats){
            setStats(pokemonAllAtributes?.stats)
        }
    },[])

    console.log(backgroundModal, 'rsrsrs')
    return (
        <ModalContainer backgroundModal={backgroundModal && backgroundModal || 'white'} >
            <ContainerArrow onClick={closeModal} >
                <ArrowLeft size={40} />
            </ContainerArrow>
            
            <ImageContainer>
                <img src={ pokemonAllAtributes?.sprites?.other?.home?.front_default} alt={pokemonAllAtributes?.name} />
            </ImageContainer>

            <InfoContainer>
                <h2>{pokemonAllAtributes?.name}</h2>
                <p>{ pokemonSpecies?.flavor_text_entries?.length > 0 && clearCharacter(pokemonSpecies?.flavor_text_entries[7]?.flavor_text) }</p>

            <ContainerAtributes>
                <Weight>

                    <span>{pokemonAllAtributes?.weight}</span>
                    <p>Peso</p>
                </Weight>

                <Height>
                    <span>{pokemonAllAtributes?.height}</span>
                    <p>Altura</p>
                </Height>

                <Power>
                    <span>{ pokemonAllAtributes?.moves?.length > 0 && pokemonAllAtributes?.moves[0]?.move?.name}</span>
                    <p>Poder Principal</p>
                </Power>
            </ContainerAtributes>

                <Abilities>
                    { stats.length > 0 && stats.map(
                        stat => (
                            <Attribute>
                            <span>{`${stat.stat.name}:`}</span>
                            <span>{stat.base_stat}</span>
                            </Attribute>
                        )
                    )}
                </Abilities>
                </InfoContainer>
            
            
        </ModalContainer>
    )
}