import { render, screen } from '@testing-library/react'

import { ModalPokemon } from '../ModalPokemon'

test('should render Modal Pokemon ', () => {

    const selectedPokemon = 'bulbasaur'
    const type = 'wather'

    render(<ModalPokemon name={selectedPokemon} closeModal={() => {}} backgroundModal={type}  />) 
})

