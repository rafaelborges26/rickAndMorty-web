
import { CaretDown } from 'phosphor-react'
import { Container, Button, SelectOptions } from './styles'
import { SelectProps } from './interface'
import { useState } from 'react'
import { Checkbox } from '../'
import Theme from '../../theme'
import { usePokemons } from '../../hooks/usePokemons'

export const Select = ({ items, title } :SelectProps ) => {

    const { SelectTypePokemons } = usePokemons()

    const [activeSelect, setIsActiveSelect] = useState(false)

    const handleActiveSelect = () => {
        setIsActiveSelect(!activeSelect)
    }

    const handleclickCheckbox = (name: string) => {
        console.log(name, 'arrived')
        SelectTypePokemons(name)
    }

    return (
        <Container>
            <Button onClick={handleActiveSelect} >
                { title && <span>{title}</span> }
                <CaretDown alt="seta para baixo" color={Theme.colors.textTitle} weight='bold' /> 
            </Button>
            <SelectOptions active={activeSelect} >
                
                { (activeSelect && items) && (
                    <>
                    { items.map(item => <Checkbox onSelectCheckbox={handleclickCheckbox} name={item.name} value={item.name} key={item.name} />  ) }
                    </>
                )
                
                
                }
                
                
            </SelectOptions>
        </Container>
    )
}