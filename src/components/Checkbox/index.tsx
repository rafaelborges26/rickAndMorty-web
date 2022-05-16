import { useState } from "react"
import { CheckboxProps } from "./interface"
import { CheckboxContainer } from "./styles"
import { usePokemons } from '../../hooks/usePokemons'


export const Checkbox = ( {name, value, onSelectCheckbox, ...rest} :CheckboxProps ) => {

    const { filterPokemonforType, typePokemonSelected } = usePokemons()

    console.log(typePokemonSelected, name, 'test')

    const handleClickCheck = () => {
        onSelectCheckbox(name)
        filterPokemonforType(name)
    }

    return (
        <CheckboxContainer onClick={handleClickCheck} >
            <input {...rest} type="checkbox" onChange={() => {}} checked={typePokemonSelected === name} value={value} />
            <span>{name}</span>
        </CheckboxContainer>
        
    )
}