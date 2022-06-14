import styled from "styled-components";

import Theme from "../../theme";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${Theme.spacings.space26};

  @media (max-width: ${Theme.breakPoints.ipadPro}) {
    flex-direction: column;
  }
`;

export const Title = styled.h5`
  color: ${Theme.colors.blue};
  font-weight: ${Theme.font.weight.bold};
  font-size: ${Theme.sizes.heading04};
  line-height: ${Theme.spacings.space17};
  text-align: center;

  font-size: ${Theme.sizes.heading04};

  @media (max-width: ${Theme.breakPoints.mobile}) {
    font-size: ${Theme.spacings.space09};
    line-height: ${Theme.spacings.space13};
  }
`;

export const ContentImage = styled.img`
  width: ${Theme.spacings.space38};
  margin-top: ${Theme.spacings.space21};
  margin-bottom: ${Theme.spacings.space20};

  @media (max-width: ${Theme.breakPoints.mobile}) {
    width: ${Theme.spacings.space39};
    margin-top: ${Theme.spacings.space21};
    margin-bottom: ${Theme.spacings.space20};
  }
`;

export const Text = styled.span`
  margin-top: ${Theme.spacings.space20};
  color: ${Theme.colors.textBlack};
`;
