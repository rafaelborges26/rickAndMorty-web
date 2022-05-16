import styled, { css } from 'styled-components'
import Theme from '../../theme'
import { TextSelectPropsStyle } from './interfaces'
import { shade } from 'polished'

export const Button = styled.button<TextSelectPropsStyle>`
    
    font-size: 1.5rem;
    line-height: 2.125rem;
    color:  ${Theme.colors.textBlack};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    background: transparent;
    border: transparent;
    transition: background-color 0.2s;

    cursor: pointer;

    &:hover {
        color: ${shade(0.4, `${Theme.colors.textBlack}`)};
    }

    ${(props) =>
      props.active &&
      css`
        border-bottom: 3px solid ${Theme.colors.textDark};         
        font-weight: 800;
    `}

    @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 1rem;
        
    }

    `