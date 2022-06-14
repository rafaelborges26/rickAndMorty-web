import { useState } from "react";

import RickAndMortyPlant from "../../assets/RickAndMortyPlant.png";
import { Header, CardWidth, Select } from "../../components";
import Theme from "../../theme";
import { Container, Title, Info, ButtonText, ContainerSelect } from "./styles";
import { useRickAndMorty } from '../../hooks/useRickyAndMorty'
import { IEpisodes } from "../../contexts/interfaces";
import { useEffect } from "react";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export function Episodes() {
  
  const { episodes, filterEpisodes, episodesFiltered } = useRickAndMorty()

  const [episodesPagination, setEpisodesPagination] = useState<IEpisodes[]>([])
    const [initialPaginationIndex, setInitialPaginationIndex] = useState(0);
    const [errorFind, setErrorFind] = useState(false)

    const [endPaginationIndex, setEndPaginationIndex] = useState(5);

    const nextPagination = () => {
        console.log(initialPaginationIndex, endPaginationIndex, 'paginations')
        if(episodesFiltered && episodesFiltered.length > 1) {
          setErrorFind(false)
            const returnEpisodes = episodesFiltered.slice(initialPaginationIndex, endPaginationIndex)
            console.log(returnEpisodes, 'paginationEncontrred')
            setInitialPaginationIndex(initialPaginationIndex + 5)
            setEndPaginationIndex(endPaginationIndex + 5)
            console.log('pag', returnEpisodes)
            setEpisodesPagination(returnEpisodes)
        } else {
          setEpisodesPagination([])
          setErrorFind(true)
        }
    }

    const handleFilterSession = (session: string) => {
        setInitialPaginationIndex(0)
        setEndPaginationIndex(5)
        filterEpisodes(session)
    }

    useEffect(() => {
        nextPagination()
    },[filterEpisodes])

  return (
    <Container>
      <Header />
      <Title>Episódios</Title>

    <ContainerSelect>
    <Select multiselect={false} onChange={(e) => handleFilterSession(e.target.value)} name="Temporadas" title="Temporadas" >
        <option value="S01" >Temporada 1</option>
        <option value="S02" >Temporada 2</option>
        <option value="S03" >Temporada 3</option>
        <option value="S04" >Temporada 4</option>

    </Select>
    </ContainerSelect>
        
    <Info>
        {episodesPagination && episodesPagination.map((episodePagination, index) => (
                <CardWidth variations="secondary" title={episodePagination.name} subTitle={`Lançamento: ${episodePagination.created}`} imageCharacter={episodePagination.characters[3]} key={episodePagination.id} numberItem={`0${index + 1} `} />
            ) 
            )    
          }
          { errorFind && (
                  <Title>Registros armazenados não constam nesta temporada</Title>
          ) }

    </Info>

    { !errorFind && (<ButtonText onClick={nextPagination} >Mostrar Mais</ButtonText>)  }


    </Container>
    
  );
}
