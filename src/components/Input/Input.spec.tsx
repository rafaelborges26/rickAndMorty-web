import { fireEvent, render, waitFor, act } from '@testing-library/react'

import { Input } from '../Input'

test('should render Checkbox  ', async () => {
    const { getByPlaceholderText } = render(<Input id='Teste' type='search' alt='Testing' placeholder='Testing input'  />)

    const input = getByPlaceholderText('Testing input')

    await waitFor(() => {
        act(() => {
    fireEvent.click(input)

    fireEvent.change(input, 'testing')
        })
    })

})