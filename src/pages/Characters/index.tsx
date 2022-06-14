import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import RickAndMortyPlant from "../../assets/RickAndMortyPlant.png";
import { Header, Button } from "../../components";

import { Select, Input, Card } from '../../components'
import RickAndMortyShop from "../../assets/RickAndMortyShop.png"; 
import { useRickAndMorty } from '../../hooks/useRickyAndMorty'
import { ICharactersGender, ICharactersStatus } from '../../contexts/interfaces'

import { Container, Title, Content, ContentSelect, Image, Text, ContainerImg } from "./styles";
import { ListCharacters } from "./ListCharacters";
import { ICard } from "../../components/Card/interfaces";

export function Characters() {

  const { findCharacterByName, filterCharacterByStatus, filterCharacterByGender, charactersFound, characterFound } = useRickAndMorty()

  const navigate = useNavigate();

  const [activeList, setActiveList] = useState(false)
  const [clearValues, setClearValues] = useState<'name' | 'status' | 'gender' | ''>('')
  const [nameValueSelected ,setnameValueSelectedSelected] = useState('')
  const [statusValueSelected ,setStatusValueSelected] = useState('')
  const [genderValueSelected,setGenderValueSelected] = useState('')

  const findCharacter = (find: string, searchBy: 'name' | 'status' | 'gender' ) => {
    if(searchBy === 'name' ) {
      findCharacterByName(find)
      setnameValueSelectedSelected(find)
      setStatusValueSelected('')
      setGenderValueSelected('')
    }

    if(searchBy === 'status') {
      filterCharacterByStatus(find as ICharactersStatus)
      setStatusValueSelected(find)
      setnameValueSelectedSelected('')
      setGenderValueSelected('')
    }

    if(searchBy === 'gender') {
      filterCharacterByGender(find as ICharactersGender)
      setGenderValueSelected(find)
      setnameValueSelectedSelected('')
      setStatusValueSelected('')
    } 

    setActiveList(true)
    setClearValues(searchBy)
  }

  return (
    <Container>
      <Header />



    <Title>Buscar Personagens</Title>

      <Content>
        
        <Input type="text" label="Buscar Personagens" value={nameValueSelected} onBlur={(e) => findCharacter(e.target.value, 'name')} id="search" />

        <ContentSelect>
          <Select multiselect={false} name="Status" onChange={(e) => findCharacter(e.target.value, 'status')} value={statusValueSelected} >
            <option value=""></option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </Select>
          <Select multiselect={false} name="Gênero" onChange={(e) => findCharacter(e.target.value, 'gender')} value={genderValueSelected} >
            <option value="" ></option>
            <option value="Female" >Female</option>
            <option value="Male" >Male</option>
            <option value="Genderless">Genderless</option>
            <option>unknown</option>
          </Select>
        </ContentSelect>
        
        <ContainerImg onClick={() => navigate('/')} >
          <Image src={RickAndMortyShop} alt="Rick e Morty entrando no portal" />
        </ContainerImg>
        <Text>©rickandmortyapi.com</Text>


      
      </Content>
      <ListCharacters activeList={activeList} setActiveList={setActiveList} />

    </Container>
  );
}
