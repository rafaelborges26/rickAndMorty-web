import styled, { css } from 'styled-components'
import Theme from '../../theme';
import { shade } from 'polished'
import { ButtonPros } from './interfaces'

export const ButtonContainer = styled.button<ButtonPros>`
    background: ${Theme.colors.button};
    box-shadow: 0px 0.125rem 0px rgba(0, 0, 0, 0.18);
    border-radius: 0.75rem;
    width: 14.5rem;
    height: 4rem;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
    align-items: center;
    text-align: center;
    border: transparent;
    color: ${Theme.colors.textWhite};
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: ${shade(0.2, `${Theme.colors.button}`)};
    }

    ${(props) =>
      props.size === 'S' &&
      css`
        font-size: 1rem;
        line-height: 1rem;
        width: 12rem;
        height: 3rem;
    `}

    ${(props) =>
      props.size === 'B' &&
      css`
        font-size: 1.5rem;
        width: 16.5rem;
        height: 4.5rem;
    `}

    

`;