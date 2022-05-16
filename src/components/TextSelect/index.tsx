import { TextSelectProps } from './interfaces'
import { Button } from './styles'

export const TextSelect = ({ children, active, size, ...rest } :TextSelectProps) => {
    return (
        <Button active={active} size={size} {...rest}>
            {children}
        </Button>
    )
}

