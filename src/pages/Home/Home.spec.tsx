import { render } from '@testing-library/react'

import { Home } from '../Home'

test('should be able render page  ', () => {
    const  { getByText } = render(<Home  />)

     expect(Home).toBeInTheDocument()
    
})