import styled, { css } from 'styled-components'
import Theme from '../../../theme'
import { IListCharacters, IListCharactersStyles } from './interfaces'

export const ListContainer = styled.div<IListCharactersStyles>`
    bottom: ${Theme.porcentages.porcentage00};
    position: fixed;
    z-index: 2;
    width: ${Theme.porcentages.porcentage20};
    background: ${Theme.colors.backgroundList};
    transition: height 0.2s;

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        height: ${Theme.porcentages.porcentage14};
    }

    ${(props) =>
    !props.activeList &&
    css`
      display: none;
    `}

`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-grow: inherit;
    justify-content: center;
    flex: 1;
    overflow-x: auto;
    height: 80%;

    > div {
        margin-right: 10px;
        margin-top: 24px;
    }

    margin-bottom: ${Theme.spacings.space23};
    
    @media (max-width: ${Theme.breakPoints.mobile}) {
        margin-bottom: ${Theme.spacings.space18};
    
    }
`;

export const HeaderList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    margin-top: ${Theme.spacings.space19};

    justify-content: space-between;
    flex-direction: row;
    padding: ${Theme.porcentages.porcentage00} ${Theme.spacings.space06};
`

export const ButtonClose = styled.button`
    border: none;
    background: transparent;
    margin-right: 10px;
    svg {
        color: ${Theme.colors.textWhite};
    }
`;

export const TitleList = styled.h3`
    font-weight: ${Theme.font.weight.normal};
    font-size: ${Theme.spacings.space09}; 
    line-height: ${Theme.spacings.space12};
    color: ${Theme.colors.textWhite};
`

export const FooterList = styled.div`
    width: inherit;
    bottom: 0;
    position: absolute;
    height: ${Theme.spacings.space21};
    text-align: center;
    
    @media (max-width: ${Theme.breakPoints.mobile}) {
        height: ${Theme.spacings.space18};
    }

    span {
        font-weight: ${Theme.font.weight.semiBold};
        font-size: ${Theme.sizes.textMedium};
        line-height: ${Theme.spacings.space10};
        color: ${Theme.colors.textWhite};
        background: ${Theme.colors.backgroundBrow}; 
    }
`;

