import Logo from '../../assets/pokemonLogo.svg'

import { HeaderContainer, ContainerLogo, Options } from './styles'
import { TextSelect } from '../index'
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const route: '' | 'dashboard' | 'contato' = useMemo(() => {
        const params = new URL(window.location).pathname;
        console.log(params, 'para')
        const formatRoute = params.replace('/', '')
        if(formatRoute === '' || formatRoute === 'dashboard' || formatRoute === 'contato')
            return formatRoute

        return ''
    },[])

    const [option, setOption] = useState<'' | 'dashboard' | 'contato'>(route)

    

    const onChangeOption = (option: '' | 'dashboard' | 'contato') => {
        setOption(option)
        navigate(`/${option}`)
    }

    return (
        <HeaderContainer>
            <ContainerLogo>
                <img src={Logo} alt="Pokemon Logotipo" />
            </ContainerLogo>

            <Options>
                <TextSelect active={option === ''} size='M' weight='bold' onClick={() => onChangeOption('')} >
                    Home
                </TextSelect>
                <TextSelect active={option === 'dashboard'} size='M' weight='bold' onClick={() => onChangeOption('dashboard')} >
                    Pokemons
                </TextSelect>
                <TextSelect active={option === 'contato'} size='M' weight='bold' onClick={() => onChangeOption('contato')} >
                    Contato
                </TextSelect>
            </Options>
            

        </HeaderContainer>
    )
}