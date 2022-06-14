import styled, { css } from "styled-components";

import Theme from "../../theme";
import { InputFieldProps } from "./interface";

export const Component = styled.div<any>`
  position: relative;
  margin-bottom: ${Theme.spacings.space08};
  color: ${Theme.colors.textDark};
  width: 100%;
  
  @media (min-width: ${Theme.breakPoints.ipad}) {
    ${(props) =>
      props.variant === "fill" &&
      css`
        max-width: 62.5rem;
        width: 100%;
        margin: 0 ${Theme.spacings.space10};
        margin-bottom: ${Theme.spacings.space08};
      `}
  }
  img {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    & + input {
      //padding-left: 3.5rem;
    }
    @media (min-width: ${Theme.breakPoints.ipad}) {
      right: ${Theme.spacings.space09};
      width: ${Theme.spacings.space11};
      height: ${Theme.spacings.space11};
      & + input {
        //padding-left: 5rem;
        font-size: ${Theme.spacings.space11};
        &::placeholder {
          font-size: ${Theme.spacings.space11};
        }
      }
    }
  }
`;

export const InputComponent = styled.input<InputFieldProps>`
  display: block;
  width: 100%;
  font-weight: 400;
  color: white;
  background-color: transparent;
  padding: ${Theme.spacings.space08} ${Theme.spacings.space04};
  transition: 0.3s;
  outline: 0;
  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 0rem solid #e9e9f040;
      border-bottom-width: ${Theme.spacings.space01};
      font-size: ${Theme.spacings.space08};
      color: ${Theme.colors.textDark};
      transition: 0.5s;
      transform-origin: left;
      & + label {
        left: ${Theme.spacings.space04};
        font-size: ${Theme.spacings.space08};
      }
    `}
  ${(props) =>
    props.variant === "fill" &&
    css`
      border: ${Theme.spacings.space00} solid ${Theme.colors.blue};
      border-radius: ${Theme.spacings.space02};
      height: ${Theme.spacings.space21};
      color: ${Theme.colors.blue};
      padding: ${Theme.spacings.space04} ${Theme.spacings.space11};
      background: ${Theme.colors.textWhite};
      backdrop-filter: blur(30px);
      max-width: 62.5rem;
      & + {
        color: #8d9da2;
        font-size: ${Theme.spacings.space08};
        font-weight: 500;
      }
      @media (min-width: ${Theme.breakPoints.ipad}) {
        height: 4.75rem;
      }
    `}
      border-color: ${(props) => props.isError && "#C53030"};
`;
export const LabelComponent = styled.label<
  HTMLLabelElement | { focused: boolean }
>`
  position: absolute;
  top: -10px;
  left: 23px;
  font-size: ${Theme.sizes.textMedium};
  letter-spacing: 0.4px;
  color: ${Theme.colors.blue};
  background: ${Theme.colors.textWhite};
  transition: 0.3s;
  pointer-events: none;
  
`;
