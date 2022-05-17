import styled from 'styled-components'
import Theme from '../../theme';
import { ModalPokemonStylesProps } from './interfaces';

export const ModalContainer = styled.div<ModalPokemonStylesProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 150px 100px 100px;
    
    width: 70vw;
    height: 600px;
    position: absolute;
    z-index: 2;
    border-radius: 15px;

    background: ${(props => 
        props.backgroundModal === 'bug' || props.backgroundModal === 'poison' ? `${Theme.colors.backgroundCardPlant}` 
        : props.backgroundModal === 'fire' ? `${Theme.colors.backgroundCardFire}` 
        : props.backgroundModal === 'water' ? `${Theme.colors.backgroundCardWater}` 
        : props.backgroundModal === 'psychiq' ? `${Theme.colors.backgroundCardPsiquic}` 
        : props.backgroundModal === 'electric' ? `${Theme.colors.backgroundCardEletric}` 
        : props.backgroundModal === 'ghost' ? `${Theme.colors.backgroundCardGhost}` 
        : `${Theme.colors.inputBorder}`
    )};

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        flex-direction: column;
        //height: auto;
        height: 100%;
        width: 95vw;
        margin: 0;
        
    }

`;

export const ContainerArrow = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        width: 100%;
        img {
            width: 70%;
        }
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        width: 40%;
    }
    
`;

export const InfoContainer = styled.div`
    width: 50%;
    padding: 15px;

    h2 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 15px;
        color: ${Theme.colors.textDark}
    }

    p {
        font-size: 18px;
        color: ${Theme.colors.textDark};
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0.02em;
        margin-bottom: 6px;
    }

`;

export const ContainerAtributes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        flex-direction: column;
        align-items: start;
        padding-top: 22px;
    }

`;

export const Weight = styled.div`
    
`

export const Height = styled.div`
    
`

export const Power = styled.div`
    
    
`

export const Abilities = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 44px;
`

export const Attribute = styled.div`

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;
        letter-spacing: 0.02em;
        color: ${Theme.colors.textAlmostDark};
    }

    span + span{
        margin-left: 30px;
    }

`

