import styled from 'styled-components';
import Theme from "../../theme";

interface PropsSelect {
    multiselect: boolean
}

export const Container = styled.div<PropsSelect>`
    position: relative;
    display: block;
    max-width: 62.5rem;
        width: 100%;

    height: ${props => props.multiselect ? `${Theme.spacings.space31}` : `${Theme.spacings.space29}`};
    display: flex;
    flex-direction: column;
    label {
        left: 23px;
        top: -10px;
        position: absolute;
        font-size: ${Theme.sizes.textMedium};
        letter-spacing: 0.4px;
        color: ${Theme.colors.blue};
        background: ${Theme.colors.textWhite};

        @media (max-width: ${Theme.breakPoints.mobile}) {
          font-size: ${Theme.sizes.textSmall};
          
        }

    }
    select {
        width: 100%;        
        height: ${props => props.multiselect ? `${Theme.spacings.space29}` : `${Theme.spacings.space22}`} ; 
        border-radius: ${Theme.spacings.space02};
        padding: ${Theme.spacings.space05} ${Theme.spacings.space10};
        border: ${Theme.spacings.space00} solid ${Theme.colors.blue};
        color: ${Theme.colors.blue}; 
        
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        background: ${Theme.colors.textWhite};
        align-items: center;
        @media (max-width: ${Theme.breakPoints.mobile}) {
            //width: ${Theme.spacings.space40};
        }

    }
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0; 
  height: 0; 
  right: 0;
  border-left: ${Theme.spacings.space02} solid transparent;
  border-right: ${Theme.spacings.space02} solid transparent;
  border-top: ${Theme.spacings.space02} solid ${Theme.colors.blue};
  margin-top: ${Theme.spacings.space11};
  margin-right: ${Theme.spacings.space06};
  max-width: 62.5rem;

`;
