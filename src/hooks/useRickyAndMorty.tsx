import { useContext } from "react";

import { RickAndMortyContext } from "../contexts/rickAndMorty";

export function useRickAndMorty() {
  const value = useContext(RickAndMortyContext);

  return value;
}
