  export interface ICharacter {
    created: string
    episode: string[]
    gender: string
    id: number
    image: string
    location: {
      name: string, 
      url: string
    }
    name: string
    origin: {
      name: string, 
      url: string
    }
    species: string
    status: ICharactersStatus
    type: string
    url: string
  }

  
export type ICharactersStatus = 'Alive' | 'Dead' | 'Unknown'

export type ICharactersGender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface ILocation {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string,
}

export interface IEpisodes {
      id: number
			name: string
			air_date: string
			episode: string
			characters: string[]
      url: string
			created: string
}