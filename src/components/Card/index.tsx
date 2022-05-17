import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import { CardProps, TypesProps, CardPropsStyles } from './interfaces';
import { CardContainer, InfoContainer, CategoryContainer } from './styles'
import { usePokemons } from '../../hooks/usePokemons'

export const Card = ( { name, ...rest } :CardProps) => {

    const { getDetailsPokemon, pokemonSpecies, pokemons } = usePokemons()

    const [typePokemon, setTypePokemon] = useState<TypesProps[]>([])
    const [imagePokemon, setImagePokemon] = useState('')

    const setPokemonDetail = async () => {
        const responsePokemon = await getDetailsPokemon(name)

        if(responsePokemon){
            setImagePokemon(responsePokemon.image)
            setTypePokemon(responsePokemon.types)
        }
    }

    useEffect(() => {
        setPokemonDetail()
    },[pokemons])

    console.log( typePokemon.length > 0 && typePokemon[0]?.type.name, typePokemon[0]?.type.name, 'typeee')

    return (
        <CardContainer {...rest} backgroundCard={ (typePokemon && typePokemon.length > 0) && typePokemon[0]?.type?.name || 'white'} >
            

            <InfoContainer>

            <p>{name}</p>

            <CategoryContainer backgroundCard={pokemonSpecies?.color?.name || 'white'} >
            {
                typePokemon && typePokemon.map(item => (
                    <span key={item.type.name} >{item.type.name}</span>
                ))
            }
            </CategoryContainer>

            </InfoContainer>
            <img src={imagePokemon} alt={`pokemon ${name}`} />
            
        </CardContainer>
    )
}