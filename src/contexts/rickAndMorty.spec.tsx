import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import MockAdapter from 'axios-mock-adapter';


import { useRickAndMorty } from "../hooks/useRickyAndMorty";
import { api } from "../services/api";
import { RickAndMortyProvider } from "./rickAndMorty";

const apiMock = new MockAdapter(api);

const ApiResponseCharacters = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
  name: "Earth (C-137)",
  url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
}

const ApiResponseLocations = {
  id: 1,
  name: 'Local Teste',
  type: 'Planet',
  dimension: 'Dimension C',
  residents: [
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/45",
  ],
  url: "https://rickandmortyapi.com/api/location/1",
  created: "2017-11-04T18:48:46.250Z",
}

const ApiResponseEpisodes = {
  id: 1,
  name: 'Local Teste',
	air_date: '2017-11-04T18:48:46.250Z',
	episode: 'S01E02',
			characters: [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
      ],
  url: "https://rickandmortyapi.com/api/episode/1",
  created: "2017-11-04T18:48:46.250Z",
}

describe("locations, characters, episodes hook", () => {
  it("should be able execute all functions hook", async () => {
    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    result.current.filterCharacterByGender('Female');
    result.current.filterCharacterByStatus('Alive');
    result.current.filterEpisodes('S01');
    result.current.findCharacterByName('Rick Sanchez');
    result.current.findImageCharacterByOriginUrl('mockTeste');
  });

  it('check call getCharacter', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        apiMock.onGet('/character').reply(200, ApiResponseCharacters);
      });
    });

    act(() => {
      result.current.getCharacters();
    });

  })

  it('check call getLocations', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        apiMock.onGet('/location').reply(200, ApiResponseLocations);
      });
    });

    act(() => {
      result.current.getLocations();
    });

  })

  it('check call getEpisodes', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        apiMock.onGet('/episode').reply(200, ApiResponseEpisodes);
      });
    });

    act(() => {
      result.current.getEpisodes();
    });

  })

  it('check call filter character by status', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.filterCharacterByStatus('Alive');
      });
    });

  });

  it('check call filterCharacter by gender', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.filterCharacterByGender('Male');
      });
    });

  });

  it('check call find character by name', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.findCharacterByName('Rick Sanchez');
      });
    });

  });

  it('check call find character by name', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.findImageCharacterByOriginUrl("https://rickandmortyapi.com/api/episode/1");
      });
    });

  });

  it('check call filter episodes by session', async () => {

    const { result } = renderHook(() => useRickAndMorty(), {
      wrapper: RickAndMortyProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.filterEpisodes("S01E01");
      });
    });

  });

});
