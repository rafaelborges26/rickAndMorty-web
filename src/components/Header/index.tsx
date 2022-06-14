import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/RickAndMortyLogo.png";
import { TextSelect } from "../index";
import { HeaderContainer, ContainerLogo, Options } from "./styles";

export function Header() {
  const navigate = useNavigate();

  const route: "" | "characters" | "places" | "episodios" = useMemo(() => {
    const params = new URL(window.location).pathname;
    
    const formatRoute = params.replace("/", "");
    if (
      formatRoute === "" ||
      formatRoute === "characters" ||
      formatRoute === "places" || 
      formatRoute === "episodios"
    )
      return formatRoute;

    return "";
  }, []);

  const [option, setOption] = useState<
    "" | "characters" | "places" | "episodios"
  >(route);

  const onChangeOption = (
    option: "" | "characters" | "places" | "episodios"
  ) => {
    setOption(option);
    navigate(`/${option}`);
  };

  return (
    <HeaderContainer>
      <ContainerLogo onClick={() => onChangeOption("")}>
        <img src={Logo} alt="Rick e Morty Logotipo" />
      </ContainerLogo>

      <Options>
        <TextSelect
          active={option === "characters"}
          size="M"
          weight="bold"
          onClick={() => onChangeOption("characters")}
        >
          Personagens
        </TextSelect>
        <TextSelect
          active={option === "places"}
          size="M"
          weight="bold"
          onClick={() => onChangeOption("places")}
        >
          Lugares Famosos
        </TextSelect>
        <TextSelect
          active={option === "episodios"}
          size="M"
          weight="bold"
          onClick={() => onChangeOption("episodios")}
        >
          Episódios
        </TextSelect>
      </Options>
    </HeaderContainer>
  );
}
