import { render } from '@testing-library/react'

import { Dashboard } from '../Dashboard'

test('should be able render page Dashboard  ', () => {
    render(<Dashboard   />)

     expect(Dashboard).toBeInTheDocument()    
})