import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import { CardProps, TypesProps } from './interfaces';
import { CardContainer, InfoContainer, CategoryContainer } from './styles'
import { usePokemons } from '../../hooks/usePokemons'

export const Card = ( { name, ...rest } :CardProps) => {

    const { getDetailsPokemon } = usePokemons()

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
    },[])



    return (
        <CardContainer {...rest} >
            

            <InfoContainer>

            <p>{name}</p>

            <CategoryContainer>
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