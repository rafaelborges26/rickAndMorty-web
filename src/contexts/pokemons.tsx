import { ReactNode, createContext, useState } from "react";
import { ItemsProps } from "../components/Select/interface";
import { PokemonProps } from "./interfaces";
import { api } from "../services/api";
import { TypesProps } from "../components/Card/interfaces";
import { useEffect } from "react";

export const PokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData);

export interface PokemonsProps {
    pokemon: {
        name: string;
    }
}



type PokemonsContextData = {
    getTypes: () => Promise<void>;
    getPokemons: () => Promise<void>;
    getDetailsPokemon: (name:string) => Promise<{ types: TypesProps[], image: string} | undefined>;
    filterPokemonforType: (type: string) => Promise<void>;
    SelectTypePokemons: (name: string) => Promise<void>;
    getPokemonSearched: (name: string) => Promise<void>;
    getPokemonAllAtributes: (name: string) => Promise<void>
    types: ItemsProps[];
    pokemons: PokemonProps[]
    pokemonFounded: PokemonProps
    pokemonAllAtributes: any
    pokemonSpecies: any
    typePokemonSelected: string;
}

type PokemonsContextProps = {
    children: ReactNode
 }

 export const PokemonsProvider = (props: PokemonsContextProps) => {

    const [types, setTypes] = useState<ItemsProps[]>([])
    const [pokemons, setPokemons] = useState<PokemonProps[]>([])
    const [pokemonFounded, setPokemonFounded] = useState<PokemonProps>({ name: '' })
    const [pokemonAllAtributes, setPokemonAllAtributes] = useState({})
    const [pokemonSpecies, setPokemonSpecies] = useState({})
    const [typePokemonSelected, setTypePokemonSelected] = useState('')

    const getTypes = async () => {
        try {
            const response = await api.get('/type')
            setTypes(response.data.results)    
        } catch (error) {
            console.log(error)
        }   
    }


    const getPokemons = async () => {
        setPokemons([])
        try {
            const response = await api.get('/pokemon?limit=18&offset=0')
            setPokemons(response.data.results)    
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonSearched = async (name: string) => {
        try {
            const response = await api.get(`/pokemon/${name}`)
            const responsePokemon = { name: response.data.name }
            setPokemonFounded(responsePokemon)    
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonAllAtributes = async (name: string) => {
        try {
            const response = await api.get(`/pokemon/${name}`)
            const responsePokemon = response.data
            console.log(responsePokemon)
            setPokemonAllAtributes(responsePokemon)

            const responseEspecies = await api.get(`/pokemon-species/${name}`)
            const responsePokemonSpecies = responseEspecies.data
            setPokemonSpecies(responsePokemonSpecies)
        } catch (error) {
            console.log(error)
        }
    }

    const filterPokemonforType = async (type: string) => {
        try {
            const response = await api.get(`/type/${type}`)
            const result = response.data.pokemon
            setPokemons([])
            
            const pokemonsFiltered: PokemonProps[] = []

            if(result) {
                console.log(result, 'result')
                result.forEach(pokemonItem => {
                    pokemonsFiltered.push(pokemonItem.pokemon)
                 })

                 if(pokemonsFiltered.length > 1) setPokemons(pokemonsFiltered)

                if(response) {
                    console.log(response, 'res')
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const SelectTypePokemons = async (name: string) => {

        if(name === typePokemonSelected) {
            setTypePokemonSelected('')
            await getPokemons()
        } else {
            setTypePokemonSelected(name)
        }
    }

    const getDetailsPokemon = async (name: string) => {
        try {
            const response = await api.get(`/pokemon/${name}`)
            const image = response.data.sprites.front_default as string
            const types = response.data.types as TypesProps[]

            const pokemonDetail = {
                types,
                image,
            }

            return pokemonDetail
        } catch (error) {
            console.log(error)
        }
        
    }


    useEffect(() => { 
        getTypes()
        getPokemons()
    },[])

    return (
        <PokemonsContext.Provider
           value={{
            getTypes,
            getPokemons,
            getDetailsPokemon,
            filterPokemonforType,
            SelectTypePokemons,
            getPokemonSearched,
            getPokemonAllAtributes,
            types,
            pokemons,
            pokemonSpecies,
            pokemonAllAtributes,
            pokemonFounded,
            typePokemonSelected,

           }}>
           {props.children}
        </PokemonsContext.Provider>
     )

 }
