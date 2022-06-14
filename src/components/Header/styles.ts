import styled from "styled-components";

import Theme from "../../theme";

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: ${Theme.colors.dark};
  box-shadow: 0 ${Theme.spacings.space02} ${Theme.spacings.space08}
    rgba(1, 28, 64, 0.2);

  @media (max-width: ${Theme.breakPoints.ipadPro}) {
    height: 4.5rem;
    justify-content: center;
  }
`;

export const ContainerLogo = styled.div`
  margin: 0px 0px 0px ${Theme.spacings.space37};
  flex: 0.4;

  @media (max-width: ${Theme.breakPoints.ipadPro}) {
    display: none;
    flex: 0;
  }

  img {
    cursor: pointer;
  }

`;

export const Options = styled.div`
  display: flex;
  flex: 0.6;
  margin-right: 10vw;

  button {
    & + button {
      margin-left: 6.5rem;
    }
  }

  @media (max-width: ${Theme.breakPoints.ipadPro}) {
    flex: 1;
    justify-content: center;
    margin: 0;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin: ${Theme.spacings.space00} ${Theme.spacings.space06};
    button {
      & + button {
        margin-left: 4.5rem;
      }
    }
  }

  @media (max-width: ${Theme.breakPoints.mediumMobile}) {
    button {
      & + button {
        margin-left: ${Theme.spacings.space17};
      }
    }
  }
`;
