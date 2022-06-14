import { useState } from "react";

import RickAndMortyPlant from "../../assets/RickAndMortyPlant.png";
import { Header, CardWidth } from "../../components";
import Theme from "../../theme";
import { Container, Title, Info, ButtonText } from "./styles";
import { useRickAndMorty } from '../../hooks/useRickyAndMorty'
import { ILocation } from "../../contexts/interfaces";
import { useEffect } from "react";

export function Places() {

  const { locations } = useRickAndMorty()

    const [locationsPagination, setLocationsPagination] = useState<ILocation[]>([])
    const [initialPaginationIndex, setInitialPaginationIndex] = useState(0);
    const [endPaginationIndex, setEndPaginationIndex] = useState(6);
    const [errorFilter, setErrorFilter] = useState(false);

    const nextPagination = () => {
      setErrorFilter(false)
        if(locations && locations.length > 5) {
            const returnLocations = locations.slice(initialPaginationIndex, endPaginationIndex)
            
            setInitialPaginationIndex(initialPaginationIndex + 6)
            setEndPaginationIndex(endPaginationIndex + 6)
            setLocationsPagination(returnLocations)
        } else {
          setErrorFilter(true)
        }
    }

    useEffect(() => {
        nextPagination()
    },[locations])

  return (
    <Container>
      <Header />
      <Title>{'Lugares famosos de Rick & Morty'}</Title>

    
        <Info>
            {locationsPagination.map(locationPagination => (
                <CardWidth variations="primary" title={locationPagination.name} subTitle={`Dimensão: ${locationPagination.dimension}`} imageCharacter={locationPagination.residents[0]} key={locationPagination.id} />
            ) 
            )    
            }            
            
            { errorFilter && (
                  <Title>Ocorreu um erro ao tentar carregar os registros</Title>
          ) }

        </Info>

        <ButtonText onClick={nextPagination} >Mostrar Mais</ButtonText>


    </Container>
  );
}
