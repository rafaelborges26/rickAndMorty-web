import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header, Button } from '../../components'
import { Container, Content, ContainerInfo, ContentInfo, Title, Description, ContentImage } from './styles'
import BannerPokemon from '../../assets/BannerPokemon.svg'
import Theme from '../../theme'

//maxwidth 768 botao pequeo
export const Home = () => {

    const navigate = useNavigate();

    const buttonSize = useMemo(() => {
        if(screen.width <= parseInt(Theme.breakPoints.mediumMobile)) {
            return 'S'
        } else if( (screen.width <= parseInt(Theme.breakPoints.ipadPro)) && (screen.width >= (parseInt(Theme.breakPoints.mediumMobile)))){
            return 'B'
        } else { 
            return 'M'
        }
    },[])

    return (
        <Container>
        <Header/>
        <Content>
            <ContainerInfo>
                <ContentInfo>
                    <Title>Qual pokemon</Title>
                    <Title>você escolheria?</Title>

                    <Description>Você pode saber o tipo de Pokémon,</Description>
                    <Description>seus pontos fortes, fracos e habilidades.</Description>
                <Button size={buttonSize} onClick={() => {navigate('/dashboard')}} >Veja os pokemons</Button>
                </ContentInfo>
            </ContainerInfo>
            

            <ContentImage>
                <img src={BannerPokemon} alt="banner do pokemon pikachu jogando uma pokebola" />
            </ContentImage>
        </Content>
        </Container>
    )
}