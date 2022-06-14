import { shade } from "polished";
import styled, { css } from "styled-components";

import Theme from "../../theme";
import { TextSelectPropsStyle } from "./interfaces";

export const Button = styled.button<TextSelectPropsStyle>`
  font-size: ${Theme.sizes.textLarge};
  line-height: ${Theme.spacings.space11};
  color: ${Theme.colors.blue};
  font-family: "Open Sans", sans-serif;
  font-weight: ${Theme.font.weight.semiBold};
  background: transparent;
  border: transparent;
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    color: ${shade(0.4, `${Theme.colors.blue}`)};
    border-color: ${shade(0.4, `${Theme.colors.blue}`)};
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: ${Theme.spacings.space01} solid ${Theme.colors.blue};
      font-weight: ${Theme.font.weight.bold};
    `}

  @media (max-width: ${Theme.breakPoints.mobile}) {
    font-size: ${Theme.spacings.space06};
  }
`;
