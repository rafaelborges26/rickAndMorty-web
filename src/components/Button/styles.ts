import { shade } from "polished";
import styled, { css } from "styled-components";

import Theme from "../../theme";
import { ButtonPros } from "./interfaces";

export const ButtonContainer = styled.button<ButtonPros>`
  background: ${Theme.colors.blue};
  box-shadow: 0px ${Theme.spacings.space01} 0px rgba(0, 0, 0, 0.18);
  border-radius: ${Theme.spacings.space06};
  width: 14.5rem;
  height: ${Theme.spacings.space25};

  font-family: "Inter";
  font-weight: 700;
  font-size: ${Theme.spacings.space10};
  line-height: ${Theme.spacings.space10};
  align-items: center;
  text-align: center;
  border: transparent;
  color: ${Theme.colors.textWhite};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, `${Theme.colors.blue}`)};
  }

  ${(props) =>
    props.size === "S" &&
    css`
      font-size: ${Theme.spacings.space08};
      line-height: ${Theme.spacings.space08};
      width: 12rem;
      height: ${Theme.spacings.space20};
    `}

  ${(props) =>
    props.size === "B" &&
    css`
      font-size: ${Theme.spacings.space11};
      width: ${Theme.spacings.space40};
      height: ${Theme.spacings.space25};
      border-radius: ${Theme.spacings.space10};
    `}
`;
