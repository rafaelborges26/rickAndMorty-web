import styled from 'styled-components'
import Theme from '../../theme';
import { CardPropsStyles } from './interfaces';

export const CardContainer = styled.div<CardPropsStyles>`
    border-radius: 15px;
    width: 160px;
    height: 110px;
    border: transparent;
    margin: 0 11px 18px;
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: ${(props => 
        props.backgroundCard === 'bug' ? `${Theme.colors.backgroundCardPlant}` 
        : props.backgroundCard === 'fire' ? `${Theme.colors.backgroundCardFire}` 
        : props.backgroundCard === 'water' || 'ice' ? `${Theme.colors.backgroundCardWater}` 
        : props.backgroundCard === 'psychiq' ? `${Theme.colors.backgroundCardPsiquic}` 
        : props.backgroundCard === 'electric' ? `${Theme.colors.backgroundCardEletric}` 
        : props.backgroundCard === 'ghost' ? `${Theme.colors.backgroundCardGhost}` 
        : `${Theme.colors.inputBorder}40`
    )};

    img {
        width: 77px;
        height: 95px;
        padding: 2px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        margin: 0 6px 10px;
        width: 140px;
        height: 94px;

        img {
            width: 66px;
            height: 75px;
            padding: 2px;
        }
    }

    
`

export const InfoContainer = styled.div`
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 10px;
        color: ${Theme.colors.textWhite};
    }
`;

export const CategoryContainer = styled.div<CardPropsStyles>`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        font-weight: 500;
        font-size: 8px;
        align-items: center;
        justify-content: center;
        padding: 4px;
        width: 48px;
        height: 20px;
        color: ${Theme.colors.textWhite};

        //border: 1px solid ${Theme.colors.backgroundCardEletric};
        //background: ${Theme.colors.backgroundCardEletric}40;
        background: ${(props => 
        props.backgroundCard === 'bug' ? `${Theme.colors.backgroundCardPlant}40` 
        : props.backgroundCard === 'fire' ? `${Theme.colors.backgroundCardFire}40` 
        : props.backgroundCard === 'water' ? `${Theme.colors.backgroundCardWater}40` 
        : props.backgroundCard === 'psychiq' ? `${Theme.colors.backgroundCardPsiquic}40` 
        : props.backgroundCard === 'electric' ? `${Theme.colors.backgroundCardEletric}40` 
        : props.backgroundCard === 'ghost' ? `${Theme.colors.backgroundCardGhost}40` 
        : `${Theme.colors.inputBorder}40`
    )};


        border-radius: 38px;

        
        background-blend-mode: soft-light;

        & + span {
            margin-top: 6px;
        }

    }
`;