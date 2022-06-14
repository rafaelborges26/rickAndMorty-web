import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import RickAndMortyPlant from "../../assets/RickAndMortyPlant.png";
import { Header, Button } from "../../components";
import Theme from "../../theme";
import { Container, Content, Title, ContentImage, Text } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const buttonSize = useMemo(() => {
    if (screen.width <= parseInt(Theme.breakPoints.mobile)) {
      return "S";
    }
    return "B";
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Está preparado para navegar no mundo</Title>
        <Title>de Ricky and Morty ?</Title>

        <ContentImage
          src={RickAndMortyPlant}
          alt="banner do rick and morty com fundo verde"
        />

        <Button
          size={buttonSize}
          onClick={() => {
            navigate("/characters");
          }}
        >
          Iniciar Aventura
        </Button>
        <Text>©rickandmortyapi.com</Text>
      </Content>
    </Container>
  );
}
