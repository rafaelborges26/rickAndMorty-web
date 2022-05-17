import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Header } from '../Header'

test('should render button  ', async () => {
    const { container, getByText } = render(<Header />)

    const buttonPokemons = getByText('Pokemons');
    const buttonContato = getByText('Contato');
    const buttonHome = getByText('Home');

    await waitFor(() => {
        act(() => {
            fireEvent.click(buttonPokemons)
        fireEvent.click(buttonContato)
        fireEvent.click(buttonHome)
        })
    })

    expect(buttonPokemons).toBeCalled()
})

