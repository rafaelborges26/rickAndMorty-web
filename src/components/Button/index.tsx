import { ButtonPros } from './interfaces'
import { ButtonContainer } from './styles'

export const Button = ( {children, size, ...rest}: ButtonPros ) => {
    return (
        <ButtonContainer {...rest} size={size} >
            {children}
        </ButtonContainer>
    )
}