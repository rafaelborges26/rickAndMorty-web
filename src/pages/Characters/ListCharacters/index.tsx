import { ListContainer, TitleList, CardContainer, FooterList, ButtonClose, HeaderList } from './styles'
import { Card } from "../../../components/Card"
import RickAndMortyLogo from '../../../assets/RickAndMortyLogo.png'
import { ICard } from '../../../components/Card/interfaces'
import { IListCharacters } from './interfaces'
import { useRickAndMorty } from '../../../hooks/useRickyAndMorty'
import { useEffect, useState } from 'react'
import { XCircle } from 'phosphor-react'

export const ListCharacters = (  { activeList, setActiveList } :IListCharacters )  => {

  const { charactersFound, characterFound } = useRickAndMorty()

  const [foundChacatersCard, setFoundChacatersCard] = useState<ICard[] | null>(null)

  useEffect(() => {
    console.log(charactersFound, 'found here')
    console.log(charactersFound.length, 'found here')
  
    let characterCard: ICard[] = []
  
    if(characterFound) {
      characterCard.push({
        name: characterFound.name,
        image: characterFound.image,
        status: characterFound.status,
        episodes: characterFound.episode
      })
    } else if(charactersFound.length > 0) {
        charactersFound.forEach(character => {
          characterCard.push({
            name: character.name,
            status: character.status,
            image: character.image,
            episodes: character.episode,
          });
        })
    }
    console.log(charactersFound, 'arrived')
    if(characterCard) {
      setFoundChacatersCard(characterCard)
    } 
  },[charactersFound, characterFound, activeList, activeList])

  console.log(foundChacatersCard, 'foundsss')

    return (
      <ListContainer activeList={activeList} >
      {foundChacatersCard &&
        (
          <>
          <HeaderList>
        <TitleList>Resultados</TitleList>
        <ButtonClose onClick={() => setActiveList(false)} >
          <XCircle size={30} />
        </ButtonClose>
      </HeaderList>

      <CardContainer>
        {foundChacatersCard.map(characterFound => (
          <Card name={characterFound.name} status={characterFound.status} episodes={characterFound.episodes} image={characterFound.image}/>
        ))}
      </CardContainer>
      </>   
        )
      }
      <FooterList>
        <span>
        ©rickandmortyapi.com
        </span>
      </FooterList>
    </ListContainer>
    )
}