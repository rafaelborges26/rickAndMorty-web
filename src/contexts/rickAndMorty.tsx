import { ReactNode, createContext, useState, useCallback, useEffect } from "react";
import { ICharacter, ICharactersGender, ICharactersStatus, ILocation, IEpisodes } from './interfaces'
import { api } from "../services/api";

export const RickAndMortyContext = createContext<RickAndMortyContextData>(
  {} as RickAndMortyContextData
);

type RickAndMortyContextData = {
  characters: ICharacter[] | null
  findCharacterByName: (characterName: string) => void
  filterCharacterByStatus: (characterStatus: ICharactersStatus) => void
  filterCharacterByGender: (characterGender: ICharactersGender) => void
  findImageCharacterByOriginUrl: (characterOriginUrl: string) => Promise<{ alt: string, url: string } | undefined>
  getLocations: () => Promise<void>
  getCharacters: () => Promise<void>
  getEpisodes: () => Promise<void>
  charactersFound: ICharacter[]
  characterFound: ICharacter | null
  locations: ILocation[] | null
  episodes: IEpisodes[] | null
  filterEpisodes: (session: string) => void
  episodesFiltered: IEpisodes[] | null
};

type RickAndMortyContextProps = {
  children: ReactNode;
};


export function RickAndMortyProvider(props: RickAndMortyContextProps) {  

  const [characters, setCharacters] = useState<null | ICharacter[]>(null)
  const [charactersFound, setCharactersFound] = useState<ICharacter[]>([])
  const [characterFound, setCharacterFound] = useState<ICharacter | null>(null)
  const [locations, setLocations] = useState<null | ILocation[]>(null)
  const [episodes, setEpisodes] = useState<null | IEpisodes[]>(null)
  const [episodesFiltered, setEpisodesFiltered] = useState<null | IEpisodes[]>(null)


  const getCharacters = async () => {
    try {
      const response = await api.get('/character')   
        const returnCharacters = response.data.results
        setCharacters(returnCharacters)  
    } catch (error) {
      console.log(error)
    }
  }

  const findCharacterByName = (characterName: string) => {
    if(characters) {
      clearFound()
      const characterFound = characters.find(character => (character.name === characterName))
      console.log(characterFound, 'foundd')


      if(characterFound) setCharacterFound(characterFound)

    }
  }

  const findImageCharacterByOriginUrl = async (characterOriginUrl: string) => {

    const initialIndexCharacterId = characterOriginUrl.lastIndexOf('/')

    const indexCharacterId = characterOriginUrl.slice(initialIndexCharacterId + 1)

    console.log(indexCharacterId, 'foundINDEX')

      try {
        const response = await api.get(`/character/${indexCharacterId}`)   
          const returnCharacter: ICharacter = response.data

          console.log('resultsss', returnCharacter)

          const ImageCharacter = {
              url: returnCharacter.image,
              alt: returnCharacter.name, 
          }

        return ImageCharacter

      } catch (error) {
        console.log(error)
      }
      
    }

  const filterCharacterByStatus = (characterStatus: ICharactersStatus) => {
    if(characters) {
      clearFound()
     const charactersFiltered = characters.filter(character => (character.status === characterStatus))

      if(charactersFiltered) setCharactersFound(charactersFiltered)

      console.log(charactersFiltered)
    }
  }

  const filterCharacterByGender = (characterGender: ICharactersGender) => {
    if(characters) {
      clearFound()
     const charactersFiltered = characters.filter(character => (character.gender === characterGender))

      if(charactersFiltered) setCharactersFound(charactersFiltered)

      console.log(charactersFiltered)
    }
  }

  const getLocations = async () => {
    try {
      const response = await api.get('/location')   
        const returnLocations = response.data.results
        setLocations(returnLocations)  
    } catch (error) {
      console.log(error)
    }
  }

  const getEpisodes = async () => {
    try {
      const response = await api.get('/episode')   
        const returnEpisodes = response.data.results
        setEpisodes(returnEpisodes)  
    } catch (error) {
      console.log(error)
    }
  }

  const filterEpisodes = (session: string) => {
    if(episodes) {
      const filteredEpisodes = episodes.filter(episode => episode.episode.includes(session))
      console.log(filteredEpisodes, 'epp')
      
      if(filteredEpisodes) setEpisodesFiltered(filteredEpisodes)
    }
    

  }

  const clearFound = () => {
    setCharacterFound(null)
    setCharactersFound([])
  }

  console.log(episodes, 'episodes')

  useEffect(() => {
    getCharacters()
    getLocations()
    getEpisodes()
  }, []);

  useEffect(() => {
    filterEpisodes('S01')
  },[episodes])

  return (
    <RickAndMortyContext.Provider
      value={{
        characters,   
        findCharacterByName,    
        findImageCharacterByOriginUrl,
        getLocations,
        getCharacters,
        getEpisodes,
        filterCharacterByStatus, 
        filterCharacterByGender,
        charactersFound,
        characterFound,
        locations,
        episodes,
        filterEpisodes,
        episodesFiltered,
      }}
    >
      {props.children}
    </RickAndMortyContext.Provider>
  );
}
