import { render, screen } from '@testing-library/react'

import { Checkbox } from '../Checkbox'

test('should render Checkbox  ', () => {
    render(<Checkbox name='Teste' onSelectCheckbox={() => {}} onChange={() => {}} value="teste" />)
})