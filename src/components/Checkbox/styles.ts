import styled from "styled-components";

import Theme from "../../theme";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: ${Theme.spacings.space02};
  input {
    margin-right: ${Theme.spacings.space05};
    margin-left: ${Theme.spacings.space10};
  }
`;
