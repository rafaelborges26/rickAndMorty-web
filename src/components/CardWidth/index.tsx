import { ICardWidth } from './interfaces'
import { ContainerCard, Info, Title, SubTitle, Image } from './styles'
import { useRickAndMorty } from '../../hooks/useRickyAndMorty'
import { useEffect, useState, useCallback } from 'react'

export const CardWidth = ( { variations, imageCharacter, ...cardProps } : ICardWidth) => {

    const { findImageCharacterByOriginUrl } = useRickAndMorty()

    const [imageCharacterLocation, setImageCharacterLocation] = useState<{url: string, alt: string} | null>(null)

    const foundImageCharacter = async () => {
        if(imageCharacter){
            const image = await findImageCharacterByOriginUrl(imageCharacter)
            
            if(image) setImageCharacterLocation(image)
        }
    }

    useEffect(() => {
        foundImageCharacter()
    },[imageCharacter])

    return (
        <ContainerCard variations={variations} >
            <Info variations={variations}>
            {cardProps.numberItem && <span>{cardProps.numberItem}</span>}
                <Title variations={variations}>{cardProps.title}</Title>
                <SubTitle variations={variations}>{cardProps.subTitle}</SubTitle>
            </Info>
            <Image variations={variations} src={imageCharacterLocation ? imageCharacterLocation.url: ''} alt={imageCharacterLocation ? imageCharacterLocation.alt: 'Erro ao buscar imagem'} />
        </ContainerCard>
    )
}