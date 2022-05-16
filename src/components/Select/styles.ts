import styled, { css } from 'styled-components'
import { SelectProps } from './interface'
import Theme from '../../theme';

export const Container = styled.div`
    width: 134px;
`;

export const Button = styled.button`
    width: 134px;
    height: 20px;
    
    background: #F2F2F2;
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.1);


    display: flex;
    position: relative;
    justify-content: center;

    svg {
        position: absolute;
        right: 6px;
    }
`;

export const SelectOptions = styled.div<SelectProps>`
    background: ${Theme.colors.inputContainer};
;
    width: inherit;
    padding-top: ${(props => props.active ? '4px' : 0 )};
    border-radius: 2%;
    position: absolute;
    z-index: 1;
    
    height: ${(props => props.active ? 'auto' : 0 )};


    transition: height 0.3s;
    animation: linear 0.4s ease-in-out linear; ;



    
`;