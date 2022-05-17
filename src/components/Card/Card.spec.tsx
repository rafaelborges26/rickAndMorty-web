import { fireEvent, render, screen } from '@testing-library/react'

import { Card } from '../Card'

test('should render button  ', () => {
    const { container } = render(<Card name={'Teste'} />)

    expect(container).toBeTruthy();

})