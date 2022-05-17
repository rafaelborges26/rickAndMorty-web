import { render, screen } from '@testing-library/react'

import { TextSelect } from '../TextSelect'

test('should render textSelect  ', () => {
    render(<TextSelect active={true} size='M' weight='bold'/>)
})